import { rem } from 'polished'
import styled from 'styled-components'
import CompactMenu from './compact'
import Logo from './logo'
import StandardMenu from './standard'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  font-size: ${rem('18px')};
  font-weight: 500;
  line-height: ${rem('36px')};
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${rem('32px')} ${rem('48px')} 0;
  @media only screen and (max-width: 575px) {
    margin: ${rem('32px')} ${rem('42px')} 0;
  }
`

const SiteHeader = () => (
  <StyledHeader>
    <Logo />
    <StandardMenu />
    <CompactMenu />
  </StyledHeader>
  )

export default SiteHeader
