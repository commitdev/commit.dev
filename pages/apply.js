import { Form, Page } from 'components'
import styles from 'styles/apply.module.css'

const Apply = () => (
  <Page>
    <section className={`${styles.heroSection}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.heroContent}`}>
          <div className={`${styles.heroHeadingContainer}`}>
            <h1 className={`${styles.heroHeading}`}>Start Taking Control of Your Career</h1>
          </div>
          <Form />
        </div>
      </div>
    </section>
  </Page>
)

export default Apply
