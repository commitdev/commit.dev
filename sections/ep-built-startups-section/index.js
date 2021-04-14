import React from 'react'

import { arrayOf, element } from 'prop-types'
import styled from 'styled-components'

import { RowContainer } from 'components'
import { FlexSectionContent } from 'components/layout'

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
`

const LogoContainer = styled(RowContainer)`
  margin-top: 3rem;
`

const EpBuiltStartupsSection = ({ children }) => (
  <StyledSection>
    <StyledFlexSectionContent>
      <StyledHeading>Our Software Engineers</StyledHeading>
      <StyledText>
        We’ve built successful startups, we’ve built large scale systems, we
        know what it takes to balance speed and quality. We’re creative, we’re
        entrepreneurial, we apply lean startup and agile best practices to
        projects we’re passionate about.
      </StyledText>
      <LogoContainer>{children}</LogoContainer>
    </StyledFlexSectionContent>
  </StyledSection>
)

EpBuiltStartupsSection.propTypes = {
  children: arrayOf(element),
}

export default EpBuiltStartupsSection
