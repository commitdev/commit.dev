import { rem } from 'polished'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'

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
`

const HamburgerButton = styled.button`
  display: none;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;

  @media only screen and (max-width: 575px) {
    display: inline-block;
    align-self: flex-end;
  }
`

const HamburgerLines = styled.span`
  margin: 4px;
  top: 50%;
  display: block;
  margin-top: -1px;

  &,
  &:after,
  &:before {
    position: absolute;
    width: 40px;
    height: 3px;
    border-radius: 3px;
    background-color: #ffffff;
    left: 0;
  }

  &:after {
    bottom: -12px;
    content: '';
  }

  &:before {
    top: -12px;
    content: '';
  }

  ${(p) =>
    p.active &&
    css`
      transform: rotate(45deg);

      &:after {
        bottom: 0;
        transform: rotate(90deg);
      }

      &:before {
        top: 0;
        opacity: 0;
      }
    `}
`

const Nav = styled.nav``

const NavOverlayRoot = styled.div`
  position: fixed;
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px 42px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  cursor: pointer;

  ${(p) =>
    p.isOpen &&
    css`
      display: flex;
      color: #ffffff;
    `}

  @media only screen and (min-width: 576px) {
    display: none;
  }
`

const NavLinks = styled.div`
  display: flex;

  & a {
    color: #fff;
    text-decoration: none;
    margin-left: ${rem('32px')};
  }

  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const NavLinksOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & a {
    color: #fff;
    text-decoration: none;
    margin-top: ${rem('32px')};
    font-size: ${rem('24px')};

    &:first-of-type {
      margin-top: 16px;
    }
  }
`

const NavOverlay = ({ id, isOpen, closeMenu, ...props }) => {
  // Must check for process.browser; Without this, document is undefined because document is not available when nextjs renders this server side
  if (process.browser) {
    return ReactDOM.createPortal(
      <NavOverlayRoot id={id} isOpen={isOpen} {...props}>
        <HamburgerButton
          type="button"
          aria-label="menu"
          aria-controls="site-navigation-small"
          onClick={closeMenu}
        >
          <HamburgerLines active={isOpen} />
        </HamburgerButton>
        <NavLinksOverlay>
          <a href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
            About
          </a>
          <a href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
            Blog
          </a>
          <a href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
            Startups
          </a>
        </NavLinksOverlay>
      </NavOverlayRoot>,
      document.querySelector('body'),
    )
  }

  return null
}

const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <StyledHeader>
      <img className="logo" src="/commit-logo.svg" alt="Commit Logo" />
      <Nav>
        <NavOverlay
          id="site-navigation-small"
          isOpen={isMobileMenuOpen}
          closeMenu={closeMenu}
        />
        <HamburgerButton
          type="button"
          aria-label="menu"
          aria-controls="site-navigation-small"
          onClick={openMenu}
        >
          <HamburgerLines active={isMobileMenuOpen} />
        </HamburgerButton>
        <NavLinks>
          <a href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
            About
          </a>
          <a href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
            Blog
          </a>
          <a href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
            Startups
          </a>
        </NavLinks>
      </Nav>
    </StyledHeader>
  )
}

export default SiteHeader
