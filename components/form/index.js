import { Formik, Form } from 'formik'
import { CheckCircle } from 'phosphor-react'
import { rem } from 'polished'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import {
  Button,
  FadeIn,
  FadeOut,
  Input,
  Loader,
  LoaderContainer,
  Select,
  Text,
  TextArea,
} from 'components'
import ErrorMessage from './error'

const FormContainer = styled.div`
  width: 33vw;
  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
  height: 100vh;
`

const SuccessHeader = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-left: ${rem('23px')};

  @media only screen and (max-width: 767px) {
    margin: 0;
  }
`

const SuccessHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1023px) {
    width: 50%;
    margin: 0 auto;
  }
`

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

const ApplicationValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please fill out this empty field'),
  email: Yup.string()
    .email(
      'The email you input seems to be invalid. Please enter a valid email',
    )
    .required('Please fill out this empty field'),
  resources: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
      }),
    )
    .min(1, 'Please select at least one option')
    .required(),
  other: Yup.string().when('resources', {
    is: (resources) =>
      resources && resources.find((res) => res.value === 'other'),
    then: Yup.string().max(50, 'Please limit it to 50 characters').required('Please describe the other resource'),
  }),
  info: Yup.string().max(250, 'Please limit your response to 250 characters'),
})

const initialValues = {
  email: '',
  name: '',
  resources: [],
  other: '',
  info: '',
}

const parseValues = (values) => {
  const parsedValues = values
  const resources = parsedValues.resources
    ? parsedValues.resources
        .map((resource) =>
          resource.value === 'other' ? parsedValues.other : resource.label,
        )
        .join(', ')
    : '' // Should not return empty string. This field is required, if resources = '', an error has occurred
  return { ...parsedValues, resources }
}

const ApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)
  const [hideOther, setHideOther] = useState(true)

  const onClick = async (values) => {
    setIsSubmitting(true)
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
      if (res.status === 200) {
        setIsSubmitted(true)
      } else {
        setHasErrors(true)
      }
    } catch (err) {
      setHasErrors(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setIsSubmitted(localStorage.getItem('formSubmitted') === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('formSubmitted', isSubmitted)
  }, [isSubmitted])

  const renderForm = () => (
    <FormContainer>
      <FadeIn show={isSubmitted}>
        <SuccessHeaderContainer>
          <CheckCircle
            {...{
              color: '#FF68BA',
              size: rem('37px'),
              weight: 'fill',
            }}
          />
          <SuccessHeader>Application Sent!</SuccessHeader>
        </SuccessHeaderContainer>
        <Text successText>
          Look out for your inbox! Someone from Commit will be in touch with
          you.
        </Text>
        <Text successText>
          In the meantime take a look at some{' '}
          <a href="https://blog.commit.dev/">blog posts</a> from our engineers.
        </Text>
      </FadeIn>
      <>
        <FadeIn show={hasErrors}>
          <Text errorText>
            Woops, the application failed to send. Please try again.
          </Text>
        </FadeIn>

        <LoaderContainer>
          <Loader show={isSubmitting} />
          {!isSubmitted && (
            <FadeOut show={!isSubmitting}>
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
                    <Input id="name" name="name" placeholder="Name" />
                    {errors.email && touched.email ? (
                      <ErrorMessage message={errors.email} />
                    ) : null}
                    <Input
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      type="email"
                    />
                    {errors.resources && touched.resources ? (
                      <ErrorMessage message={errors.resources} />
                    ) : null}
                    <Select
                      instanceId="resources"
                      name="resources"
                      onChange={(e, value) => {
                        setHideOther(
                          !value.find((res) => res.value === 'other'),
                        )
                        setFieldValue(e, value)
                      }}
                      onBlur={setFieldTouched}
                      options={SelectOptions}
                    />
                    {!hideOther && errors.other && touched.other ? (
                      <ErrorMessage message={errors.other} />
                    ) : null}
                    <Input
                      id="other"
                      name="other"
                      placeholder="Please describe the other resource(s)"
                      type={hideOther ? 'hidden' : 'text'}
                    />
                    {errors.info && touched.info ? (
                      <ErrorMessage message={errors.info} />
                    ) : null}
                    <TextArea
                      name="info"
                      as="textarea"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Let us know where to learn more about you\n(Ex. Website, blog, youtube, etc)"
                    />
                    <Button
                      {...{
                        'data-test-id': 'button',
                        disabled: isSubmitting,
                      }}
                    >
                      Apply To Join
                    </Button>
                  </Form>
                )}
              </Formik>
            </FadeOut>
          )}
        </LoaderContainer>
      </>
    </FormContainer>
  )

  return renderForm()
}

export default ApplicationForm
