import { Button, Header, Paragraph, Section } from 'components'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          className={styles.logo}
          src="/images/commit-logo-white.svg"
          alt="Commit Logo"
        />
      </div>
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
            <Button>APPLY TO JOIN</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
