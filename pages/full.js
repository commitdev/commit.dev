// TODO: this will replace pages/index.js eventually. Keeping separate to avoid merge conflicts for now

import {
  ArticlePreview,
  Button,
  Testimonials,
  Heading,
  Text,
  SiteHeader,
} from 'components'
import BracketSvg from 'public/bracket.svg'
import ConnectSvg from 'public/connect.svg'
import ElevateSvg from 'public/elevate.svg'
import ExploreSvg from 'public/explore.svg'
import QuotesSvg from 'public/quotation-marks.svg'
import styles from 'styles/full.module.css'

const Full = () => (
  <div className={styles.contentRoot}>
    <section className={`${styles.hero} ${styles.dark}`}>
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
    <section className={`${styles.about} ${styles.grey}`}>
      <div className={styles.flexSection}>
        <Heading variant={Heading.VARIANT.h2} className={styles.aboutHeading}>
          How it Works
        </Heading>
        <div className={styles.aboutDescription}>
          <Text>
            Commit provides the space for Software Engineers to build
            relationships, experience growth at their own pace and establish a
            deeper network. We hire remote-first Engineers who want to eliminate
            the risk and the friction of finding and working for startups in
            Silicon Valley.
          </Text>
          <Text>
            Commit Engineers are matched with startup projects on a three month
            basis, and if there is a fit with the startup, we facilitate the
            transition to full time at that company.
          </Text>
          <Text>
            While at Commit, we provide coaching opportunities, professional
            development and internal projects to help develop our own open
            source platforms.
          </Text>
          <Text>
            Even after Commit Engineers ‘graduate’ to startups, they remain a
            member of the Community.
          </Text>
        </div>
      </div>
    </section>
    <section className={`${styles.projects} ${styles.dark}`}>
      <div className={styles.flexSection}>
        <Heading
          variant={Heading.VARIANT.h2}
          className={styles.projectsHeading}
        >
          Our Technology
        </Heading>
        <Text className={styles.projectsOverview}>
          The Commit Platform replaces the technical interview with deep
          backgrounds, matches Software Engineers with relevant startups, and
          connect Engineers with peers for interest sharing or technical
          support.
        </Text>
        <div className={styles.projectList}>
          <div className={styles.project}>
            <Heading
              variant={Heading.VARIANT.h3}
              className={styles.projectName}
            >
              Commit Zero
            </Heading>
            <Text className={styles.projectDescription}>
              Work on software that is the standard all modern applications will
              be built on. We’ve developed an internal platform to help
              technical founders address the countless challenges of developing
              applications.
            </Text>
          </div>
          <div className={styles.projectDivider} />
          <div className={styles.project}>
            <Heading
              variant={Heading.VARIANT.h3}
              className={styles.projectName}
            >
              Helix
            </Heading>
            <Text className={styles.projectDescription}>
              Contribute to the software that builds the Commit community. Helix
              is designed to replace the technical interview with deep
              backgrounds, match Software Engineers with startup projects, and
              connect Engineers with one another.
            </Text>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.testimonials}>
      <div className={styles.flexSection}>
        <Heading
          variant={Heading.VARIANT.h2}
          className={styles.testimonialsHeading}
        >
          What Our Engineering Partners Have to Say
        </Heading>
        <QuotesSvg />
        <Testimonials className={styles.testimonialsCarousel} />
      </div>
    </section>
    <section className={`${styles.partners} ${styles.grey}`}>
      <div className={styles.flexSection}>
        <Heading
          variant={Heading.VARIANT.h2}
          className={styles.partnersHeading}
        >
          Who We Work With
        </Heading>
        <div className={styles.partnersList}>
          <a href="https://www.procurify.com/" rel="noopener noreferrer">
            <img
              className={styles.partnerLogo}
              alt="Procurify logo"
              src="/procurify.png"
            />
          </a>
          <a href="https://www.vidyard.com/" rel="noopener noreferrer">
            <img
              className={styles.partnerLogo}
              alt="Vidyard logo"
              src="/vidyard.png"
            />
          </a>
          <a href="https://www.planworth.co/" rel="noopener noreferrer">
            <img
              className={styles.partnerLogo}
              alt="Planworth logo"
              src="/planworth.png"
            />
          </a>
          <a href="https://www.dapperlabs.com/" rel="noopener noreferrer">
            <img
              className={styles.partnerLogo}
              alt="Dapper logo"
              src="/dapper.png"
            />
          </a>
          <a href="https://www.usepatch.com/" rel="noopener noreferrer">
            <img
              className={styles.partnerLogo}
              alt="Patch logo"
              src="/patch.png"
            />
          </a>
          <a href="https://www.plastiq.com/" rel="noopener noreferrer">
            <img
              className={styles.partnerLogo}
              alt="Plastiq logo"
              src="/plastiq.png"
            />
          </a>
        </div>
      </div>
    </section>
    <footer className={`${styles.footer} ${styles.dark}`}>
      <div className={styles.flexSection}>
        <Text className={styles.footerText}>
          Interested in Taking Control of your Career?
        </Text>
        <Button className={styles.footerButton}>Apply to Join Us</Button>
        <img alt="Commit logo" src="/commit-logo.svg" />
      </div>
    </footer>
  </div>
)

export default Full
