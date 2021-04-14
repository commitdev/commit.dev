import { useEffect, useState } from 'react'

import { CheckCircle, SpinnerGap } from 'phosphor-react'
import { rem } from 'polished'
import styled from 'styled-components'

import { Button, Input, MultiSelect, Text, TextArea } from 'components'

const FormContainer = styled.div`
  max-width: 480px;
`

const SuccessHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isFormWaiting, setIsFormWaiting] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)
  const [state, setState] = useState({
    email: '',
    info: '',
    name: '',
    resources: null,
  })

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMultiSelect = (e) => {
    setState({ ...state, resources: e })
  }

  const onClick = async (e) => {
    e.preventDefault()
    if (!isFormWaiting) {
      setIsFormWaiting(true)
      setHasErrors(false)
      try {
        // Convert to a readable string for the Google Sheet
        const parsedResources = state.resources
          ? state.resources.map((res) => res.label).join(', ')
          : null
        const res = await fetch(process.env.NEXT_PUBLIC_HELIX_HOST, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...state, resources: parsedResources }),
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
      </FormContainer>
    ) : (
      <FormContainer>
        {hasErrors && (
          <Text errorText>
            Woops, the application failed to send. Please try again.
          </Text>
        )}
        <form>
          <Input
            {...{
              name: 'name',
              onChange,
              placeholder: 'Name',
              value: state.name,
            }}
          />
          <Input
            {...{
              name: 'email',
              onChange,
              placeholder: 'E-mail',
              type: 'email',
              value: state.email,
            }}
          />
          <MultiSelect
            {...{
              name: 'selectResources',
              onChange: onMultiSelect,
              value: state.resources,
              options: [
                { value: 'angellist', label: 'AngelList' },
                { value: 'blog', label: 'Blog' },
                { value: 'event', label: 'Event' },
                { value: 'linkedin', label: 'LinkedIn' },
                { value: 'linkedin_connection', label: 'LinkedIn Connection' },
                { value: 'twitter', label: 'Twitter' },
                { value: 'wordofmouth', label: 'Word of Mouth' },
                { value: 'youtube', label: 'YouTube' },
              ],
            }}
          />
          <TextArea
            {...{
              maxlength: 1024,
              name: 'info',
              onChange,
              placeholder:
                'Let us know where to learn more about you\n(Ex. Website, blog, youtube, etc)',
              value: state.info,
            }}
          />
          <Button
            {...{
              onClick,
              disabled: isFormWaiting,
            }}
          >
            {isFormWaiting === false ? (
              'Apply To Join'
            ) : (
              <SpinningSpinnerGap
                {...{
                  color: '#000',
                  size: rem('22px'),
                  weight: 'bold',
                }}
              />
            )}
          </Button>
        </form>
      </FormContainer>
    )

  return renderForm()
}

export default Form
