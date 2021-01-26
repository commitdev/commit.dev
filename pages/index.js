import { Form, Heading, SiteHeader, Text } from 'components'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <SiteHeader />

      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.contentSection}>
            <Heading>Take control of your career</Heading>

            <Heading variant={Heading.VARIANT.h2}>Connect</Heading>
            <Text>
              Build meaningful relationships in a distributed community of
              Software Engineers
            </Text>

            <Heading variant={Heading.VARIANT.h2}>Explore</Heading>
            <Text>
              Get matched with challenging projects at exciting Silicon Valley
              startups and build impactful products
            </Text>

            <Heading variant={Heading.VARIANT.h2}>Elevate</Heading>
            <Text>
              Refine or expand your expertise through hands-on projects,
              peer-to-peer coaching and professional development opportunities
            </Text>
          </div>

          <div className={styles.contentSection}>
            <Heading variant={Heading.VARIANT.h3}>
              Commit is currently in closed-beta. Apply now to be a part of the
              community soon.
            </Heading>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
