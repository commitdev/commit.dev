import { CheckCircle } from 'phosphor-react'
import { rem } from 'polished'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from 'styles/Home.module.css'
import Button from '../button'
import Input from '../input'
import Text from '../text'
import TextArea from '../textarea'

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
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
      setIsFormSubmitted(true)
      return res.json()
    } catch (err) {
      return setHasErrors(true)
    }
  }

  const SuccessHeader = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    margin-left: ${rem('60px')};
    margin-top: ${rem('-40px')};

    @media only screen and (max-width: 767px) {
      margin: 0;
    }
  `

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
        <SuccessHeader {...{ className: styles.successHeader }}>
          Application Sent !
        </SuccessHeader>
        <Text successText>
          Look out for your inbox! Someone from Commit will be in touch with
          you.
        </Text>
        <Text successText>
          In the meantime take a look at some{' '}
          <a
            {...{
              className: styles.blogLink,
              href: 'https://blog.commit.dev/',
            }}
          >
            blog posts
          </a>{' '}
          from our engineers.
        </Text>
      </div>
    ) : (
      <>
        {hasErrors && (
          <Text errorText>
            Woops, the application failed to send. Please try again.
          </Text>
        )}
        <form>
          <Input
            {...{
              className: styles.input,
              name: 'name',
              onChange,
              placeholder: 'Name',
              value: state.name,
            }}
          />
          <Input
            {...{
              className: styles.input,
              name: 'email',
              onChange,
              placeholder: 'E-mail',
              type: 'email',
              value: state.email,
            }}
          />
          <TextArea
            {...{
              className: styles.input,
              name: 'info',
              onChange,
              placeholder:
                'Let us know where to learn more about you\n(Ex. Website, blog, youtube, etc)',
              value: state.info,
            }}
          />
          <Button {...{ className: styles.button, onClick }}>
            APPLY TO JOIN
          </Button>
        </form>
      </>
    )

  return renderForm()
}

export default Form
