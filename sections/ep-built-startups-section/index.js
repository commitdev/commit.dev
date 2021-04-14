import React from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Logo, RowContainer } from 'components'
import { FlexSectionContent } from 'components/layout'
import { TABLET_SMALL_SIZE } from 'styles/constants'

import { SectionHeadingBold } from '../../components/heading'

const StyledSection = styled.section`
  padding: 7.5rem 1.25rem 6.5rem;
  background: #e8edf4;
`

const StyledFlexSectionContent = styled(FlexSectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeading = styled(SectionHeadingBold)`
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
`

const StyledText = styled.div`
  margin-top: 1.5rem;
  max-width: 40rem;
  text-align: center;
  font-family: 'Lato';
  line-height: 1.625rem;
  margin-right: -1rem;
  margin-left: -1rem;
`

const LogosContainer = styled(RowContainer)`
  margin-top: 3rem;
`

const MIN_LOGO_WIDTH = rem(125)

const LogoContainer = styled.div`
  padding: 1rem;
  min-width: ${MIN_LOGO_WIDTH};
  flex: 0 0 50%;
  max-width: 50%;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`

const EpBuiltStartupsSection = () => (
  <StyledSection>
    <StyledFlexSectionContent>
      <StyledHeading>Our Software Engineers</StyledHeading>
      <StyledText>
        We’ve built successful startups, we’ve built large scale systems, we
        know what it takes to balance speed and quality. We’re creative, we’re
        entrepreneurial, we apply lean startup and agile best practices to
        projects we’re passionate about.
      </StyledText>
      <LogosContainer>
        <LogoContainer>
          <Logo
            url="https://www.hootsuite.com/"
            alt="Hootsuite logo"
            name="hootsuite.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.amazon.com/"
            alt="Amazon logo"
            name="amazon.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.paypal.com/"
            alt="PayPal logo"
            name="paypal.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo url="https://www.bench.co/" alt="Bench logo" name="bench.png" />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.intel.com/"
            alt="Intel logo"
            name="intel.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.verisign.com/"
            alt="Verisign logo"
            name="verisign.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.cisco.com/"
            alt="Cisco logo"
            name="cisco.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.opendns.com/"
            alt="OpenDNS logo"
            name="opendns.png"
          />
        </LogoContainer>
      </LogosContainer>
    </StyledFlexSectionContent>
  </StyledSection>
)

export default EpBuiltStartupsSection
