import { Form, PageHeading, SectionText, SiteHeader } from 'components'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={`${styles.container} flex-column`}>
        <SiteHeader />
        <div className={styles.contentContainer}>
          <div className="flex-row center-xs start-md flexContainer col-xs-12 col-md-offset-1">
            <div className="col-md-5">
              <PageHeading>Take control of your career</PageHeading>

              <SectionText mobileHeader>
                Commit is currently in closed-beta.
                <br />
                Apply now to be a part of the community soon.
              </SectionText>

              <h2 className={styles.benefitTitle}>Connect</h2>
              <p className={styles.benefitText}>
                Build meaningful relationships in a distributed community of
                Software Engineers
              </p>

              <h2 className={styles.benefitTitle}>Explore</h2>
              <p className={styles.benefitText}>
                Get matched with challenging projects at exciting Silicon Valley
                startups and build impactful products
              </p>

              <h2 className={styles.benefitTitle}>Elevate</h2>
              <p className={styles.benefitText}>
                Refine or expand your expertise through hands-on projects,
                peer-to-peer coaching and professional development opportunities
              </p>
            </div>

            <div className="col-md-5 col-md-offset-1">
              <SectionText>
                Commit is currently in closed-beta.
                <br />
                Apply now to be a part of the community soon.
              </SectionText>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
