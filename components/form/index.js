import { useEffect, useState } from 'react'

import { Formik, Form } from 'formik'
import { CheckCircle, SpinnerGap } from 'phosphor-react'
import { rem } from 'polished'
import styled from 'styled-components'
import * as Yup from 'yup'

import { Button, Input, Select, Text, TextArea } from 'components'
import { MOBILE_ONLY } from 'styles/constants'

import ErrorMessage from './error'

const FormContainer = styled.div`
  max-width: 480px;
`

const SuccessHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${MOBILE_ONLY} {
    justify-content: center;
  }
`

const SuccessHeader = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-left: ${rem('15px')};
`

const SpinningSpinnerGap = styled(SpinnerGap)`
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const ApplicationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please fill out this empty field'),
  email: Yup.string()
    .email('The email you input seems to be invalid. Please enter a valid email')
    .required('Please fill out this empty field'),
  resources: Yup.array().of(
    Yup.object().shape({
      value: Yup.string(),
      label: Yup.string(),
    }),
  )
    .min(1, 'Please select at least one option')
    .required(),
  other: Yup.string()
    .when('resources', {
      is: resources => resources && resources.find((res) => res.value === 'other'),
      then: Yup.string().max(50, 'Please limit it to 50 characters'),
    }),
  info: Yup.string()
    .max(250, 'Please limit your response to 250 characters'),
})

const SelectOptions = [
  { value: 'angellist', label: 'AngelList' },
  { value: 'blog', label: 'Blog' },
  { value: 'event', label: 'Event' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'linkedin_connection', label: 'LinkedIn Connection' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'wordofmouth', label: 'Word of Mouth' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'other', label: 'Other...' },
]

const initialValues = {
  email: '',
  name: '',
  resources: [],
  other: '',
  info: '',
}

const parseValues = (values) => {
  const parsedValues = values
  const resources = parsedValues.resources ?
    parsedValues.resources.map((resource) => (resource.value === 'other' ? parsedValues.other : resource.label)).join(', ')
    :
    // Should not return empty string. This field is required, if resources = '', an error has occurred
    ''
  return { ...parsedValues, resources}
}

const ApplicationForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isFormWaiting, setIsFormWaiting] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)
  const [hideOther, setHideOther] = useState(true)

  const onClick = async (values) => {
    if (!isFormWaiting) {
      setIsFormWaiting(true)
      setHasErrors(false)
      try {
        const parsedVales = parseValues(values)
        const res = await fetch(process.env.NEXT_PUBLIC_HELIX_HOST, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parsedVales),
        })
        setIsFormWaiting(false)
        if (res.status !== 200) {
          return setHasErrors(true)
        }
        setIsFormSubmitted(true)
        return res.json()
      } catch (err) {
        return setHasErrors(true)
      }
    }
    return false
  }

  useEffect(() => {
    setIsFormSubmitted(localStorage.getItem('formSubmitted'))
  }, [])

  useEffect(() => {
    localStorage.setItem('formSubmitted', isFormSubmitted)
  }, [isFormSubmitted])

  const renderForm = () =>
    isFormSubmitted === true ? (
      <FormContainer>
        <SuccessHeaderContainer>
          <CheckCircle
            color='#FF68BA'
            size={rem('37px')}
            weight='fill'
          />
          <SuccessHeader>Application Sent!</SuccessHeader>
        </SuccessHeaderContainer>
        <Text successText>
          Look out for your inbox! Someone from Commit will be in touch with
          you.
        </Text>
        <Text successText>
          In the meantime, take a look at some{' '}
          <a href="https://blog.commit.dev/">blog posts</a> from our engineers.
        </Text>
      </FormContainer>
    ) : (
      <FormContainer>
        {hasErrors && (
          <Text errorText>
            Whoops, the application failed to send. Please try again.
          </Text>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={ApplicationValidationSchema}
          onSubmit={onClick}
        >
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form>
              {errors.name && touched.name ? (
                <ErrorMessage message={errors.name} />
              ) : null}
              <Input
                id='name'
                name='name'
                placeholder='Name'
              />
              {errors.email && touched.email ? (
                <ErrorMessage message={errors.email} />
              ) : null}
              <Input
                id='email'
                name='email'
                placeholder='E-mail'
                type='email'
              />
              {errors.resources && touched.resources ? (
                <ErrorMessage message={errors.resources} />
              ) : null}
              <Select
                instanceId='resources'
                name='resources'
                onChange={(e, value) => {
                  if (value && value.find( (res) => res.value === 'other') ) {
                    setHideOther(false)
                  } else {
                    setHideOther(true)}setFieldValue(e,value)
                  }
                }
                onBlur={setFieldTouched}
                options={SelectOptions}
              />
              {!hideOther && errors.other && touched.other ? (
                <ErrorMessage message={errors.other} />
              ) : null}
              <Input
                id='other'
                name='other'
                placeholder='Please describe the other resource(s)'
                type={hideOther ? 'hidden' : 'text'}
              />
              {errors.info && touched.info ? (
                <ErrorMessage message={errors.info} />
              ) : null}
              <TextArea
                name='info'
                as='textarea'
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Let us know where to learn more about you\n(Ex. Website, blog, youtube, etc)'
              />
              <Button
                type='submit'
                disabled={isFormWaiting}
              >
                {isFormWaiting === false ? (
                  'Apply To Join'
                ) : (
                  <SpinningSpinnerGap
                    color='#000'
                    size={rem('22px')}
                    weight='bold'
                  />
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    )

  return renderForm()
}

export default ApplicationForm
