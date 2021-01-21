import { rem } from 'polished'
import styled from 'styled-components'

const StyledHeader = styled.header`
  font-family: Montserrat;
  font-size: ${rem('18px')};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem('36px')};
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${rem('32px')} ${rem('48px')} 0;
  @media only screen and (max-width: 575px) {
    margin: ${rem('32px')} ${rem('42px')} 0;
  }

  .logo {
    width: ${rem('212px')};
    @media only screen and (max-width: 575px) {
      width: ${rem('148px')};
    }
  }

  & .header-links a {
    margin: 0 ${rem('24px')};
    text-decoration: none;

    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

// TODO: update blog to <Link/> with proper href once that's added to new site
const SiteHeader = () => (
  <StyledHeader className="col-md-12">
    <img className="logo" src="/commit-logo-white.svg" alt="Commit Logo" />
    <nav className="header-links">
      <a href="https://blog.commit.dev/">Blog</a>
    </nav>
  </StyledHeader>
)

export default SiteHeader
