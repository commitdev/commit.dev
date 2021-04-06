import styled from 'styled-components'

import { Text, ApplyLink, SiteLinks, SocialIcons } from 'components'
import {
  TABLET_LARGE_SIZE,
  MOBILE_SIZE,
  TABLET_SMALL_SIZE,
  COLOR_VARIATIONS,
} from 'styles/constants'

const FooterContainer = styled.footer`
  padding: 150px 0 0 0;
  color: #ffffff;
  background: #000000;
  background: linear-gradient(68.66deg, #0f1011 0%, #010242 100%);

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 98px 0 48px;
  }

  p {
    font-family: Montserrat;
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 2.75rem;
    letter-spacing: 0.1em;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 4rem;

    @media only screen and (max-width: ${MOBILE_SIZE}) {
      margin-bottom: 3rem;
    }
  }
`

const StyledApplyLink = styled(ApplyLink)`
  max-width: 23.75rem;
  margin-bottom: 200px;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-bottom: 124px;
  }
`

const FlexSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    max-width: none;
    margin: 0 20px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    max-width: none;
    margin: 0 36px;
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 48px 48px;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`

const CommitLogo = styled.img`
  height: 40px;
`

const SocialIconsContainer = styled.div`
  position: relative;
  left: 30px;
  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    left: -18px;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-top: 58px;
    left: auto;
  }
`

const SiteLinksContainer = styled.div`
  a {
    color: ${(p) =>
      p.variation === COLOR_VARIATIONS.dark ? '#ffffff' : '#010242'};
    margin: 0 36px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 36px;

    @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
      margin: 0 12px;
    }
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    display: none;
  }
`

const Footer = (props) => (
  <FooterContainer {...props}>
    <FlexSection>
      <Text>Let’s get started</Text>
      <StyledApplyLink onHoverBackground='#100c2c' />
    </FlexSection>
    <BottomContainer>
      <CommitLogo alt="Commit logo" src="/commit-logo.svg" />
      <SocialIconsContainer>
        <SocialIcons />
      </SocialIconsContainer>
      <SiteLinksContainer variation={COLOR_VARIATIONS.dark}>
        <SiteLinks />
      </SiteLinksContainer>
    </BottomContainer>
  </FooterContainer>
)

export default Footer
