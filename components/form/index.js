import { CheckCircle } from 'phosphor-react'
import { rem } from 'polished'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../button'
import Input from '../input'
import { Loader, LoaderContainer } from '../loader'
import Text from '../text'
import TextArea from '../textarea'

const SuccessHeader = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-left: ${rem('60px')};
  margin-top: ${rem('-40px')};

  @media only screen and (max-width: 767px) {
    margin: 0;
  }
`

const LinkContainer = styled(Text)`
  margin-top: ${rem('16px')};
  text-align: center;
`

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)
  const [state, setState] = useState({
    email: '',
    info: '',
    name: '',
  })

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onClick = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasErrors(false)
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HELIX_HOST, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      })
      if (res.status === 200) {
        setIsFormSubmitted(true)
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
    setIsFormSubmitted(localStorage.getItem('formSubmitted'))
  }, [])

  useEffect(() => {
    localStorage.setItem('formSubmitted', isFormSubmitted)
  }, [isFormSubmitted])

  const renderForm = () =>
    isFormSubmitted === true ? (
      <div>
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
      </div>
    ) : (
      <>
        {hasErrors && (
          <Text errorText>
            Woops, the application failed to send. Please try again.
          </Text>
        )}
        <LoaderContainer>
          {isSubmitting && <Loader />}
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
            <TextArea
              {...{
                name: 'info',
                onChange,
                placeholder:
                  'Let us know where to learn more about you\n(Ex. Website, blog, youtube, etc)',
                value: state.info,
              }}
            />
            <Button
              {...{
                'data-test-id': 'button',
                disabled: isSubmitting,
                onClick,
              }}
            >
              Apply To Join
            </Button>
            <LinkContainer>
              <a
                href="https://www.notion.so/Commit-for-Software-Engineers-6608ecb933da4e449c16e67834ec0f4e"
                rel="noopener noreferrer"
                target="_blank"
              >
                Why you should apply today
              </a>
            </LinkContainer>
          </form>
        </LoaderContainer>
      </>
    )

  return renderForm()
}

export default Form
