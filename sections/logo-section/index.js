import React from 'react'

import { arrayOf, element } from 'prop-types'
import styled from 'styled-components'

import { Heading } from 'components'
import { FlexSectionContent } from 'components/layout'

const { h2 } = Heading.VARIANT

const StyledSection = styled.section`
  padding: 5rem 1.25rem;
  background: #e8edf4;
`

const StyledFlexSectionContent = styled(FlexSectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeading = styled(Heading)`
  max-width: 50rem;
  font-weight: 400;
  text-transform: none;
  line-height: 3.5rem;
  text-align: center;
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5.75rem;
`

const Explanation = styled.p`
  margin-top: 6.5rem;
  text-align: center;
  font-family: 'Lato';
  line-height: 1.25rem;
`

const LogoSection = ({ children }) => (
  <StyledSection>
    <StyledFlexSectionContent>
      <StyledHeading variant={h2}>
        We only let the most promising startups on our platform<sup>*</sup>
      </StyledHeading>
      <LogoContainer>{children}</LogoContainer>
      <Explanation>
        <sup>*</sup>We partner with startups that are on track to become
        category leading public companies, with cultures that prioritize
        engineering satisfaction and learning
      </Explanation>
    </StyledFlexSectionContent>
  </StyledSection>
)

LogoSection.propTypes = {
  children: arrayOf(element),
}

export default LogoSection
