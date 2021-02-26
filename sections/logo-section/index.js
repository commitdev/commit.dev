import React from 'react'

import { string, arrayOf, element } from 'prop-types'
import styled from 'styled-components'

import { Heading, Text } from 'components'
import { FlexSectionContent } from 'components/layout'
import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

const { h2 } = Heading.VARIANT

const StyledSection = styled.section`
  padding: 140px 0;
  background: #e8edf4;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: 80px 0;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 64px 0px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 120px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 10%;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0;
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-bottom: 2.625rem;
  }
`

const TextContainer = styled.div`
  text-align: center;
  padding-top: 24px;
  margin: 0 17%;
`

const LogoSection = ({ title, description, children }) => (
  <StyledSection>
    <FlexSectionContent>
      <StyledHeading variant={h2}>{title}</StyledHeading>
      <TextContainer>
        <Text>{description}</Text>
      </TextContainer>
      <LogoContainer>{children}</LogoContainer>
    </FlexSectionContent>
  </StyledSection>
)

LogoSection.defaultProps = { title: '', description: '' }

LogoSection.propTypes = {
  title: string,
  description: string,
  children: arrayOf(element),
}

export default LogoSection
