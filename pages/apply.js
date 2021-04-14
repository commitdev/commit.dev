import { Form, Page } from 'components'
import styles from 'styles/apply.module.css'

import { HeroHeading } from '../components/heading'

const Apply = () => (
  <Page>
    <section className={`${styles.heroSection}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.heroContent}`}>
          <div className={`${styles.heroHeadingContainer}`}>
            <HeroHeading>Start Taking Control of Your Career</HeroHeading>
          </div>
          <Form />
        </div>
      </div>
    </section>
  </Page>
)

export default Apply
