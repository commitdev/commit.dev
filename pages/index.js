import {
  ApplyLink,
  ArticlePreview,
  CompanyLogo,
  Footer,
  Testimonials,
  Heading,
  HighlightedText,
  Text,
  SiteHeader,
} from 'components'
import { ContentRoot } from 'components/layout'
import BracketSvg from 'public/bracket.svg'
import ConnectSvg from 'public/connect.svg'
import ElevateSvg from 'public/elevate.svg'
import ExploreSvg from 'public/explore.svg'
import QuotesSvg from 'public/quotation-marks.svg'
import { LogoSection } from 'sections'
import styles from 'styles/Home.module.css'

const { h2, h3 } = Heading.VARIANT

const Home = () => (
  <ContentRoot>
    <section className={`${styles.hero} ${styles.dark}`}>
      <SiteHeader />
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <Heading className={styles.heroHeading}>
            We are the community for{' '}
            <HighlightedText>remote-first</HighlightedText> Software Engineers
          </Heading>
          <Text sectionText className={styles.heroText}>
            Commit is designing the future of work and we're putting Engineers
            at the center.
          </Text>
          <ApplyLink>Apply to Join Us</ApplyLink>
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
          <Heading variant={h2} className={styles.featureHeading}>
            Connect
          </Heading>
          <Text>
            Build meaningful relationships in a distributed community of
            Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <ExploreSvg />
          <Heading variant={h2} className={styles.featureHeading}>
            Explore
          </Heading>
          <Text>
            Build your network in a distributed community of Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <ElevateSvg />
          <Heading variant={h2} className={styles.featureHeading}>
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
      <Heading variant={h2} className={styles.articlesHeading}>
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
          heading="Lillian Liang, Plastiq Inc."
          text="Lillian Liang is a Commit engineer who joined Plastiq earlier this
          year. We talked to her about her journey to Commit and Plastiq..."
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
        <Heading variant={h2} className={styles.aboutHeading}>
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
            transition to full time at that company. Otherwise, there is no
            obligation to join and you can get matched with a new startup
            instead.
          </Text>
          <Text>
            While at Commit, we provide coaching opportunities, professional
            development and internal projects to help develop our own open
            source platforms.
          </Text>
          <Text>
            Even after Commit Engineers ‘graduate’ to startups, they remain a
            member of the Community so they can continue to tap into the
            knowledge base and join craft, skills or interest based groups.
          </Text>
        </div>
      </div>
    </section>
    <section className={styles.platform}>
      <div className={styles.platformContainer}>
        <div className={styles.platformTopRow}>
          <Heading variant={h2} className={styles.platformHeading}>
            The Commit Platform
          </Heading>
          <Text sectionText>
            The Commit Platform replaces the technical interview with deep backgrounds, 
            matches Software Engineers with relevant startups, and connect Engineers 
            with peers for interest sharing or technical support.
          </Text>
        </div>
        <div className={styles.platformFlex}>
          <div className={styles.gridSection}>
            <div className={styles.profileColumnLeft}>
              <picture>
                <source
                  media="(min-width:770px) and (max-width:1200px)"
                  srcSet="/platform-laptop-tablet.png"
                />
                <source
                  media="(min-width:1201px)"
                  srcSet="/platform-laptop-desktop.png"
                />
                <img
                  src="/platform-laptop-mobile.png"
                  alt="Unicorn Pool Float"
                  className={styles.platformImage}
                />
              </picture>
            </div>
            <div className={styles.profileColumnRight}>
              <Heading variant={h3} className={styles.platformTitle}>
                Platform profile 
              </Heading>
              <Text sectionText className={styles.platformDescription}>
                Get the latest community events, news and updates. Most importantly, begin to look for startup 
                opportunities recommended specifically for you. This is also where engineers begin to 
                connect with their peers and join interest-based groups.
              </Text>
            </div>
          </div>
          <div className={`${styles.gridSection} ${styles.opportunitiesRow}`}>
            <div className={styles.opportunitiesColumnLeft}>
              <picture>
                <source
                  media="(min-width:770px) and (max-width:1200px)"
                  srcSet="/opportunities-laptop-tablet.png"
                />
                <source
                  media="(min-width:1201px)"
                  srcSet="/opportunities-laptop-desktop.png"
                />
                <img
                  src="/opportunities-laptop-mobile.png"
                  alt="Unicorn Pool Float"
                  className={styles.platformImage}
                />
              </picture>
            </div>
            <div className={styles.opportunitiesColumnRight}>
              <Heading variant={h3} className={styles.platformTitle}>
                Opportunities
              </Heading>
              <Text sectionText className={styles.platformDescription}>
                Commit engineers don't apply to startups. Instead, startups
                apply to our engineers.
                <br />
                <br />
                Our team works tirelessly to match engineers with the top
                opportunities based on their skill set, interests, and career
                goals. Engineers can browse new recommendations one by one, and
                dig into each individual opportunities, with detailed and
                insightful information we've gathered.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.testimonials}>
      <div className={styles.flexSection}>
        <Heading variant={h2} className={styles.testimonialsHeading}>
          What Our Engineering Partners Have to Say
        </Heading>
        <QuotesSvg />
        <Testimonials className={styles.testimonialsCarousel} />
      </div>
    </section>
    <LogoSection title="Who We Work With">
      <CompanyLogo
        url="https://www.procurify.com/"
        alt="Procurify logo"
        logoSrc="/procurify.png"
      />
      <CompanyLogo
        url="https://www.vidyard.com/"
        alt="Vidyard logo"
        logoSrc="/vidyard.png"
      />
      <CompanyLogo
        url="https://www.planworth.co/"
        alt="Planworth logo"
        logoSrc="/planworth.png"
      />
      <CompanyLogo
        url="https://www.dapperlabs.com/"
        alt="Dapper logo"
        logoSrc="/dapper.png"
      />
      <CompanyLogo
        url="https://www.usepatch.com/"
        alt="Patch logo"
        logoSrc="/patch.png"
      />
      <CompanyLogo
        url="https://www.plastiq.com/"
        alt="Plastiq logo"
        logoSrc="/plastiq.png"
      />
    </LogoSection>
    <Footer />
  </ContentRoot>
)

export default Home
