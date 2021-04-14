import { rem } from 'polished'
import styled from 'styled-components'

import { CompanyLogo, Text, Footer, Page } from 'components'
import {
  DiversityAndInclusionSection,
  EpBuiltStartupsSection,
  ExecutiveTeamSection,
  OpensourceSection,
} from 'sections'
import styles from 'styles/about.module.css'
import { TABLET_SMALL_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

import { HeroHeading } from '../components/heading'

const { small: SMALL_LOGO } = CompanyLogo.SIZE

const AboutHeroHeading = styled(HeroHeading)`
  margin-top: ${rem(140)};
  margin-bottom: 3rem;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-top: ${rem(180)};
    margin-bottom: 4.25rem;
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    margin-top: ${rem(200)};
    margin-bottom: 4.5rem;
  }
`

const About = () => (
  <Page>
    <section className={`${styles.hero}`}>
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <AboutHeroHeading>
            Commit is the remote-first community for Software Engineers.
          </AboutHeroHeading>
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
    <Footer />
  </Page>
)

export default About
