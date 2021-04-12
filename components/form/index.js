import { useEffect, useState } from 'react'

import { CheckCircle } from 'phosphor-react'
import { rem } from 'polished'
import styled from 'styled-components'

import { Button, Input, MultiSelect, Text, TextArea } from 'components'
import { TABLET_SMALL_SIZE } from 'styles/constants'

const FormContainer = styled.div`
  max-width: 480px;
`

const SuccessHeader = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-left: ${rem('60px')};
  margin-top: ${rem('-40px')};

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    margin: 0;
  }
`

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
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
    setState({...state, resources: e })
  }

  const onClick = async (e) => {
    e.preventDefault()
    setHasErrors(false)
    try {
      // Convert to a readable string for the Google Sheet
      const parsedResources = state.resources ? state.resources.map( res => res.label).join(', ') : null
      const res = await fetch(process.env.NEXT_PUBLIC_HELIX_HOST, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...state, resources: parsedResources }),
      })
      if (res.status !== 200) {
        return setHasErrors(true)
      }
      setIsFormSubmitted(true)
      return res.json()
    } catch (err) {
      return setHasErrors(true)
    }
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
        <CheckCircle
          {...{
            color: '#FF68BA',
            size: rem('37px'),
            weight: 'fill',
          }}
        />
        <SuccessHeader>Application Sent!</SuccessHeader>
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
          <MultiSelect {... {
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
          }} />
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
            }}
          >
            Apply To Join
          </Button>
        </form>
      </FormContainer>
    )

  return renderForm()
}

export default Form
