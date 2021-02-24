import styled from 'styled-components'

import { Heading, SiteHeader, Form } from 'components'
import { ContentRoot } from 'components/layout'
import { DESKTOP_SIZE, MOBILE_SIZE } from 'styles/constants'

const HeroSection = styled.section`
  color: #ffffff;
  background: #000000;
  background: linear-gradient(248.66deg, #010242 0%, #0f1011 100%);
  overflow: hidden;
  height: 100%;
  flex-grow: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 5rem 8rem 4.25rem;
  @media only screen and (max-width: ${DESKTOP_SIZE}) {
    margin: 5rem 5rem 4.25rem;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    max-width: initial;
    margin: 5rem 1rem 4.25rem;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    flex-direction: column;
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

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    max-width: initial;
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
