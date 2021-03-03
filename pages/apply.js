import styled from 'styled-components'

import { Heading, SiteHeader, Form } from 'components'
import { ContentRoot } from 'components/layout'
import {
  MOBILE_SIZE,
  TABLET_LARGE_SIZE,
  TABLET_SMALL_SIZE,
} from 'styles/constants'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background: #000000;
  background: linear-gradient(248.66deg, #010242 0%, #0f1011 100%);
  overflow: hidden;
  flex-grow: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0 5rem;
  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 3rem;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0 1rem;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const HeroHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroHeading = styled(Heading)`
  max-width: 500px;
  margin-right: 2rem;
  line-height: 96px;

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    text-align: center;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    max-width: initial;
    line-height: 64px;
    margin-right: 0px;
    margin-bottom: 2rem;
  }
`

const Apply = () => (
  <ContentRoot>
    <HeroSection>
      <SiteHeader />
      <Content>
        <HeroContent>
          <HeroHeadingContainer>
            <HeroHeading>Start Taking Control of Your Career</HeroHeading>
          </HeroHeadingContainer>
          <Form />
        </HeroContent>
      </Content>
    </HeroSection>
  </ContentRoot>
)

export default Apply
