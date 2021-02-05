import { rem } from 'polished'
import styled from 'styled-components'

const LogoImg = styled.img`
  width: ${rem('212px')};

  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const SmallLogoImg = styled.img`
  @media only screen and (min-width: 576px) {
    display: none;
  }
`

const Logo = () => (
  <>
    <LogoImg src="/commit-logo.svg" alt="Commit Logo" />
    <SmallLogoImg src="/commit-logo-small.svg" alt="Commit Logo" />
  </>
)

export default Logo
