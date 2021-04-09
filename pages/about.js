import { CompanyLogo, Heading, Text, Footer, Page } from 'components'
import {
  DiversityAndInclusionSection,
  EpBuiltStartupsSection,
  ExecutiveTeamSection,
  OpensourceSection,
} from 'sections'
import styles from 'styles/about.module.css'

const { small: SMALL_LOGO } = CompanyLogo.SIZE

const About = () => (
  <Page>
    <section className={`${styles.hero}`}>
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
      <DiversityAndInclusionSection />
      <ExecutiveTeamSection />
      <EpBuiltStartupsSection>
        <CompanyLogo
          url="https://www.hootsuite.com/"
          alt="Hootsuite logo"
          name="hootsuite.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.amazon.com/"
          alt="Amazon logo"
          name="amazon.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.paypal.com/"
          alt="PayPal logo"
          name="paypal.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.bench.co/"
          alt="Bench logo"
          name="bench.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.intel.com/"
          alt="Intel logo"
          name="intel.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.verisign.com/"
          alt="Verisign logo"
          name="verisign.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.cisco.com/"
          alt="Cisco logo"
          name="cisco.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.opendns.com/"
          alt="OpenDNS logo"
          name="opendns.png"
          size={SMALL_LOGO}
        />
      </EpBuiltStartupsSection>
      <OpensourceSection />
    </section>
    <Footer />
  </Page>
)

export default About
