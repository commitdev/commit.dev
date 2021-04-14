import { Footer, Logo, Page } from 'components'
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
    <SpSection>
      <Logo
        url="https://www.procurify.com/"
        alt="Procurify logo"
        name="procurify.png"
      />
      <Logo url="https://certn.co/" alt="Certn logo" name="certn.png" />
      <Logo
        url="https://www.dapperlabs.com/"
        alt="Dapper logo"
        name="dapper.png"
      />
      <Logo url="https://www.usepatch.com/" alt="Patch logo" name="patch.png" />
      <Logo
        url="https://www.plastiq.com/"
        alt="Plastiq logo"
        name="plastiq.png"
      />
    </SpSection>
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
