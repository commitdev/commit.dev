import { useState } from 'react'
import {
  Button,
  Input,
  Header,
  Paragraph,
  Section,
  SiteHeader,
  TextArea,
} from 'components'
import styles from 'styles/Home.module.css'

export default function Home() {
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
    const res = await fetch(process.env.NEXT_PUBLIC_HELIX_HOST, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
    return res.json()
  }

  return (
    <>
      <div className={`${styles.container} flex-column`}>
        <SiteHeader />
        <div className={styles.contentContainer}>
          <div className="flex-row center-xs start-md flexContainer col-xs-12 col-md-offset-1">
            <div className="col-md-4">
              <Header>Take control of your career</Header>

              <Paragraph
                {...{
                  title: 'Connect',
                }}
              >
                Build meaningful relationships in a distributed community of
                Software Engineers
              </Paragraph>
              <Paragraph
                {...{
                  title: 'Explore',
                }}
              >
                Get matched with challenging projects at exciting Silicon Valley
                startups and build impactful products
              </Paragraph>
              <Paragraph
                {...{
                  title: 'Elevate',
                }}
              >
                Refine or expand your expertise through hands-on projects,
                peer-to-peer coaching and professional development opportunities
              </Paragraph>
            </div>

            <div className="col-md-4 col-md-offset-3">
              <Section className={styles.closedBetaSection}>
                Commit is currently in closed-beta.
                <br />
                Apply now to be a part of the community soon.
              </Section>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
