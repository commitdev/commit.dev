import React from 'react'

import { string, arrayOf, element } from 'prop-types'
import styled from 'styled-components'

import { Heading, Text } from 'components'
import { FlexSectionContent } from 'components/layout'
import {
  TABLET_LARGE_SIZE,
  TABLET_SMALL_SIZE,
  MOBILE_SIZE,
} from 'styles/constants'

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
  margin: 60px 120px 0;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 60px 10% 0;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 18px 0 0 0;
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-bottom: 2.625rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContent = styled.div`
  width: 585px;

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    width: 430px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 342px;
  }
`

const StyledText = styled(Text)`
  margin: 24px 0;
  text-align: center;
`

const LogoSection = ({ title, description, children }) => (
  <StyledSection>
    <FlexSectionContent>
      <Container>
        <TextContent>
          <StyledHeading variant={h2}>{title}</StyledHeading>
          {description && <StyledText>{description}</StyledText>}
        </TextContent>
      </Container>
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
