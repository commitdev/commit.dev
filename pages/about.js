import { Heading, Text, Footer, SiteHeader } from 'components'
import styles from 'styles/about.module.css'

const About = () => (
  <div className={styles.contentRoot}>
    <section className={`${styles.hero}`}>
      <SiteHeader variation={SiteHeader.VARIATIONS.light} />
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <Heading className={styles.heroHeading}>
            Commit is the remote-first community for Software Engineers.
          </Heading>
          <Text sectionText className={styles.heroText}>
            We’re designing a future of work that puts Engineers first. To that
            end, we provide professional development, peer-to-peer support, and
            access to the best startup opportunities. The result is that
            Engineers have agency over their growth and the impact of their
            work.
          </Text>
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

export default About
