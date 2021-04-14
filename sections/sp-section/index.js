import React from 'react'

import { rem } from 'polished'
import { arrayOf, element } from 'prop-types'
import styled from 'styled-components'

import { RowContainer } from 'components'
import { FlexSectionContent } from 'components/layout'
import { TABLET_SMALL_SIZE } from 'styles/constants'

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

const LogoContainer = styled(RowContainer)`
  margin-top: ${rem(56)};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-top: ${rem(92)};
  }
`

const Explanation = styled.p`
  margin-top: 6.5rem;
  text-align: center;
  font-family: 'Lato';
  line-height: 1.25rem;
`

const SpSection = ({ children }) => (
  <StyledSection>
    <StyledFlexSectionContent>
      <SectionHeadingContainer>
        <SectionHeading>
          We only let the most promising startups on our platform<sup>*</sup>
        </SectionHeading>
      </SectionHeadingContainer>
      <LogoContainer>{children}</LogoContainer>
      <Explanation>
        <sup>*</sup>We partner with startups that are on track to become
        category leading public companies, with cultures that prioritize
        engineering satisfaction and learning
      </Explanation>
    </StyledFlexSectionContent>
  </StyledSection>
)

SpSection.propTypes = {
  children: arrayOf(element),
}

export default SpSection
