import { rem } from 'polished'
import styled from 'styled-components'

import { Text, Footer, Page } from 'components'
import {
  DiversityAndInclusionSection,
  EpBuiltStartupsSection,
  ExecutiveTeamSection,
  OpensourceSection,
} from 'sections'
import styles from 'styles/about.module.css'
import { TABLET_SMALL_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

import { HeroHeading } from '../components/heading'

const About = () => (
  <Page>
    <section className={`${styles.hero}`}>
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Commit is the remote-first community for Software Engineers.
          </h1>
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
    <EpBuiltStartupsSection />
    <OpensourceSection />
    <Footer />
  </Page>
)

export default About
