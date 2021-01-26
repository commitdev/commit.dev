import { rem } from 'polished'
import styled from 'styled-components'

const SiteHeader = () => (
  <StyledHeader>
    <img className="logo" src="/commit-logo.svg" alt="Commit Logo" />
    <nav>
      <a
        className="nav-link"
        href="https://blog.commit.dev/"
        target="_blank"
        rel="noreferrer"
      >
        Blog
      </a>
    </nav>
  </StyledHeader>
)

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

  .logo {
    width: ${rem('212px')};
    @media only screen and (max-width: 575px) {
      width: ${rem('148px')};
    }
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
  }
`

export default SiteHeader
