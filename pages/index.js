import { Footer, Page } from 'components'
import {
  EngineersWhoJoinedSection,
  FeaturedArticles,
  HomeHero,
  HowItWorks,
  PlatformSection,
  SpSection,
  TestimonialsSection,
  TimelineSection,
  WhyCommitSection,
} from 'sections'

const Home = () => (
  <Page>
    <HomeHero />
    <SpSection />
    <HowItWorks />
    <FeaturedArticles />
    <TimelineSection />
    <WhyCommitSection />
    <PlatformSection />
    <EngineersWhoJoinedSection />
    <TestimonialsSection />
    <Footer />
  </Page>
)

export default Home
