import { rem } from 'polished'
import styled from 'styled-components'

import { Text } from 'components'
import { GridItem, GridSection } from 'components/layout'
import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

import { SectionHeadingBold, SubHeadingBold } from '../../components/heading'

const StyledSection = styled.section`
  margin: 165px auto 0;
  padding: 0 20px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 124px 0 0;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 142px 16px 0;
  }
`

const HowItWorksHeading = styled(SectionHeadingBold)`
  text-align: center;
  margin-bottom: ${rem('64px')};
`

const HowItWorksItems = styled(GridSection)`
  counter-reset: howitworks;
  border-bottom: 1px solid #000;
  padding-bottom: 110px;
  max-width: 1200px;
`

const HowItWorksItem = styled(GridItem)`
  &:before {
    counter-increment: howitworks;
    content: counter(howitworks);
    font-size: ${rem('36px')};
    font-weight: 700;
    color: #8493b0;
  }
`

const HowItWorksItemHeading = styled(SubHeadingBold)`
  margin: 1.5rem 0 1rem;
  text-align: center;
`

const HowItWorksItemText = styled(Text)`
  text-align: center;
`

const HowItWorks = () => (
  <StyledSection>
    <HowItWorksHeading>How It Works</HowItWorksHeading>
    <HowItWorksItems>
      <HowItWorksItem>
        <HowItWorksItemHeading>Join Commit</HowItWorksItemHeading>
        <HowItWorksItemText>
          View your personalized startup matches, collaborate with other Startup
          Engineers, and get career support through coaching and resources
        </HowItWorksItemText>
      </HowItWorksItem>
      <HowItWorksItem>
        <HowItWorksItemHeading>Start a Pilot</HowItWorksItemHeading>
        <HowItWorksItemText>
          Start shipping code with a startup you’re passionate about without
          committing long term
        </HowItWorksItemText>
      </HowItWorksItem>
      <HowItWorksItem>
        <HowItWorksItemHeading>Join a Startup</HowItWorksItemHeading>
        <HowItWorksItemText>
          Join the ideal startup permanently, and collaborate with the Commit
          community for technical support &amp; more
        </HowItWorksItemText>
      </HowItWorksItem>
    </HowItWorksItems>
  </StyledSection>
)

export default HowItWorks
