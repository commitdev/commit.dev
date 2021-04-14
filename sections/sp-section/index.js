import React from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { RowContainer, Logo } from 'components'
import { FlexSectionContent } from 'components/layout'
import { TABLET_SMALL_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

import { SectionHeading } from '../../components/heading'
import SectionHeadingContainer from '../../components/section-heading-container'

const StyledSection = styled.section`
  padding: 5rem 1.25rem;
  background: #e8edf4;
`

const StyledFlexSectionContent = styled(FlexSectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogosContainer = styled(RowContainer)`
  margin-top: ${rem(56)};
  margin-right: -1rem;
  margin-left: -1rem;
  width: auto;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    width: 100%;
    margin-top: ${rem(92)};
  }
`

const LogoContainer = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
  padding: 0 1rem;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    max-width: 33.33%;
    flex: 0 0 33.33%;
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    max-width: 160px;
    min-width: 160px;
    flex: 1;
  }
`

const Explanation = styled.p`
  margin-top: ${rem(94)};
  text-align: center;
  font-family: 'Lato';
  line-height: 1.25rem;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-top: ${rem(104)};
  }
`

const SpSection = () => (
  <StyledSection>
    <StyledFlexSectionContent>
      <SectionHeadingContainer>
        <SectionHeading>
          We only let the most promising startups on our platform<sup>*</sup>
        </SectionHeading>
      </SectionHeadingContainer>
      <LogosContainer>
        <LogoContainer>
          <Logo
            url="https://www.procurify.com/"
            alt="Procurify logo"
            name="procurify.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo url="https://certn.co/" alt="Certn logo" name="certn.png" />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.dapperlabs.com/"
            alt="Dapper logo"
            name="dapper.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.usepatch.com/"
            alt="Patch logo"
            name="patch.png"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo
            url="https://www.plastiq.com/"
            alt="Plastiq logo"
            name="plastiq.png"
          />
        </LogoContainer>
      </LogosContainer>
      <Explanation>
        <sup>*</sup>We partner with startups that are on track to become
        category leading public companies, with cultures that prioritize
        engineering satisfaction and learning
      </Explanation>
    </StyledFlexSectionContent>
  </StyledSection>
)

export default SpSection
