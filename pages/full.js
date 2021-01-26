// TODO: this will replace pages/index.js eventually. Keeping separate to avoid merge conflicts for now

import { ArticlePreview, Button, Heading, Text, SiteHeader } from 'components'
import BracketSvg from 'public/bracket.svg'
import ConnectSvg from 'public/connect.svg'
import ElevateSvg from 'public/elevate.svg'
import ExploreSvg from 'public/explore.svg'
import styles from 'styles/full.module.css'

const Full = () => (
  <div className={`${styles.contentRoot}`}>
    <section className={styles.hero}>
      <SiteHeader />
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <Heading className={styles.heroHeading}>
            We are the community for{' '}
            <span className={styles.highlight}>remote-first</span> Software
            Engineers
          </Heading>
          <Text sectionText className={styles.heroText}>
            Commit is designing the future of work and we're putting Engineers
            at the center.
          </Text>
          <Button className={styles.heroButton}>Apply to Join Us</Button>
        </div>
        <div className={styles.heroSvg}>
          <BracketSvg />
        </div>
      </div>
    </section>
    <section className={styles.features}>
      <div className={styles.featuresTransition} />
      <div className={styles.gridSection}>
        <div className={styles.feature}>
          <ConnectSvg />
          <Heading
            variant={Heading.VARIANT.h2}
            className={styles.featureHeading}
          >
            Connect
          </Heading>
          <Text>
            Build meaningful relationships in a distributed community of
            Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <ExploreSvg />
          <Heading
            variant={Heading.VARIANT.h2}
            className={styles.featureHeading}
          >
            Explore
          </Heading>
          <Text>
            Build your network in a distributed community of Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <ElevateSvg />
          <Heading
            variant={Heading.VARIANT.h2}
            className={styles.featureHeading}
          >
            Elevate
          </Heading>
          <Text>
            Refine or expand your expertise through hands-on projects,
            peer-to-peer coaching & professional development opportunities
          </Text>
        </div>
      </div>
    </section>
    <section className={styles.articles}>
      <Heading variant={Heading.VARIANT.h3} className={styles.articlesHeading}>
        Featured Articles
      </Heading>
      <div className={styles.gridSection}>
        <ArticlePreview
          imgSrc="/person-looking-at-monitor.jpeg"
          imgAlt="Person looking at computer monitor"
          heading="My job at Commit is to create an incredible experience for engineers"
          text="One August in the 1990s, I drove across Canada, with a good friend.
          I have so many fond memories of the journey: our debates about how
          to solve the world's problems, the lengthy and..."
          link="https://blog.commit.dev/articles/b5i3amkjq2nz7y4apq4jsfd66hudu8"
        />
        <ArticlePreview
          imgSrc="/lillian-liang.jpeg"
          imgAlt="Lillian Liang"
          heading="Lillian Liang, Platiq Inc."
          text="Lillian Lian is a Commit engineer who joined Plastiq earlier this
          year. We talked to her about her journey to Commit and Platiq..."
          link="https://blog.commit.dev/articles/committed-to-success-lillian-liang-plastiq-inc"
        />
        <ArticlePreview
          imgSrc="/monolith-diagram.png"
          imgAlt="Monolith architecture"
          heading="Streaming out the monolith"
          text="As a monolithic code base builds up over time, it can become harder
          and harder to maintain, and more difficult to extract data from,
          especially if..."
          link="https://blog.commit.dev/articles/streaming-out-the-monolith"
        />
      </div>
    </section>
  </div>
)

export default Full
