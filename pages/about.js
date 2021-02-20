import { CompanyLogo, Heading, Text, Footer, SiteHeader } from 'components'
import { ExecutiveTeamSection, LogoSection } from 'sections'
import styles from 'styles/about.module.css'

const { small: SMALL_LOGO } = CompanyLogo.SIZE

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
      <ExecutiveTeamSection />
      <LogoSection
        title="Our Software Engineers"
        description="We’ve built successful startups, we’ve built large scale systems, we know what it takes to balance speed and quality. We’re creative, we’re entrepreneurial, we apply lean startup and agile best practices to projects we’re passionate about."
      >
        <CompanyLogo
          url="https://www.hootsuite.com/"
          alt="Hootsuite logo"
          logoSrc="/hootsuite.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.amazon.com/"
          r
          alt="Amazon logo"
          logoSrc="/amazon.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.paypal.com/"
          alt="PayPal logo"
          logoSrc="/paypal.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.bench.co/"
          alt="Bench logo"
          logoSrc="/bench.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.intel.com/"
          alt="Intel logo"
          logoSrc="/intel.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.verisign.com/"
          alt="Verisign logo"
          logoSrc="/verisign.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.cisco.com/"
          alt="Cisco logo"
          logoSrc="/cisco.png"
          size={SMALL_LOGO}
        />
        <CompanyLogo
          url="https://www.opendns.com/"
          alt="OpenDNS logo"
          logoSrc="/opendns.png"
          size={SMALL_LOGO}
        />
      </LogoSection>
    </section>
    <Footer />
  </div>
)

export default About
