import React from 'react'

import { arrayOf, element } from 'prop-types'
import styled from 'styled-components'

import { Heading, RowContainer } from 'components'
import { FlexSectionContent } from 'components/layout'

const { h2 } = Heading.VARIANT

const StyledSection = styled.section`
  padding: 7.5rem 1.25rem 6.5rem;
  background: #e8edf4;
`

const StyledFlexSectionContent = styled(FlexSectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeading = styled(Heading)`
  max-width: 50rem;
  font-weight: 800;
  text-transform: none;
  line-height: 3.5rem;
  text-align: center;
  text-transform: uppercase;
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
      <StyledHeading variant={h2}>Our Software Engineers</StyledHeading>
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