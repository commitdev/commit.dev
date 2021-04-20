import styled from 'styled-components'

import { ArticlePreview, StaticImage } from 'components'
import { GridSection } from 'components/layout'
import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

import { SectionHeadingBold } from '../../components/heading'

const StyledSection = styled.section`
  margin: 122px auto 0;
  padding: 0 20px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 124px 0 0;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 142px 16px 0;
  }
`

const FeaturedArticlesHeading = styled(SectionHeadingBold)`
  text-align: center;
  margin: 0 24px 3rem 24px;
`

const FeaturedArticlesItems = styled(GridSection)`
  border-bottom: 1px solid #000;
  padding-bottom: 110px;
  max-width: 1200px;
  margin: auto;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding-bottom: 124px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding-bottom: 142px;
  }
`

const FeaturedArticles = () => (
  <StyledSection>
    <FeaturedArticlesHeading>Featured Articles</FeaturedArticlesHeading>
    <FeaturedArticlesItems>
      <ArticlePreview
        media={
          <StaticImage
            name="person-looking-at-monitor.jpeg"
            alt="Person looking at computer monitor"
          />
        }
        heading="My job at Commit is to create an incredible experience for engineers"
        text="One August in the 1990s, I drove across Canada, with a good friend.
        I have so many fond memories of the journey: our debates about how
        to solve the world's problems, the lengthy and..."
        link="https://blog.commit.dev/articles/b5i3amkjq2nz7y4apq4jsfd66hudu8"
      />
      <ArticlePreview
        media={<StaticImage name="lillian-liang.jpeg" alt="Lillian Liang" />}
        heading="Lillian Liang, Plastiq Inc."
        text="Lillian Liang is a Commit engineer who joined Plastiq earlier this
        year. We talked to her about her journey to Commit and Plastiq..."
        link="https://blog.commit.dev/articles/committed-to-success-lillian-liang-plastiq-inc"
      />
      <ArticlePreview
        media={
          <StaticImage
            name="monolith-diagram.png"
            alt="Monolith architecture"
          />
        }
        heading="Streaming out the monolith"
        text="As a monolithic code base builds up over time, it can become harder
        and harder to maintain, and more difficult to extract data from,
        especially if..."
        link="https://blog.commit.dev/articles/streaming-out-the-monolith"
      />
    </FeaturedArticlesItems>
  </StyledSection>
)

export default FeaturedArticles
