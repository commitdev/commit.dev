import { usePrevious } from 'helpers/hooks'
import { rem } from 'polished'
import { bool, func, string } from 'prop-types'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import HamburgerMenu from './hamburger-menu'
import Links from './links'
import Logo from './logo'

const NAV_ID = 'site-navigation-small'

const NavOverlayRoot = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${(p) =>
    p.isOpen &&
    css`
      display: flex;
      height: 100%;
    `}

  @media only screen and (min-width: 576px) {
    display: none;
    height: 0px;
  }
`

const FauxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${rem('32px')} ${rem('42px')} 0;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;

  & a {
    color: #fff;
    text-decoration: none;
    margin-top: ${rem('8px')};
    font-size: ${rem('36px')};
    line-height: ${rem('60px')};

    &:first-of-type {
      margin-top: 16px;
    }
  }
`

const NavOverlay = React.forwardRef(
  ({ id, isOpen, closeMenu, ...props }, ref) => {
    // Must check for process.browser; Without this, document is undefined because document is not available when nextjs renders this server side
    if (process.browser) {
      return ReactDOM.createPortal(
        <NavOverlayRoot id={id} isOpen={isOpen} {...props}>
          <FauxHeader>
            <Logo />
            <HamburgerMenu
              isOpen={isOpen}
              handleClick={closeMenu}
              ariaControlsId={id}
              ref={ref}
              className="close"
            />
          </FauxHeader>
          <Nav>
            <Links />
          </Nav>
        </NavOverlayRoot>,
        document.querySelector('body'),
      )
    }

    return null
  },
)

NavOverlay.propTypes = {
  id: string,
  isOpen: bool,
  closeMenu: func,
}

const Compact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCompactScreen, setIsCompactScreen] = useState(false)
  const OpenButtonRef = React.createRef()
  const CloseButtonRef = React.createRef()
  const prevIsOpen = usePrevious(isOpen)
  const prevIsCompactScreen = usePrevious(isCompactScreen)

  const openMenu = () => {
    if (process.browser) {
      const Root = document.getElementById('__next')
      Root.setAttribute('hidden', 'true')
    }
    setIsOpen(true)
  }

  const closeMenu = () => {
    if (process.browser) {
      const Root = document.getElementById('__next')
      Root.removeAttribute('hidden')
    }
    setIsOpen(false)
  }

  useEffect(() => {
    if (prevIsOpen === undefined || prevIsOpen === isOpen) {
      // first render or update triggered that does not update isOpen state
      return
    }

    if (isOpen) {
      CloseButtonRef.current && CloseButtonRef.current.focus()
    } else {
      OpenButtonRef.current && OpenButtonRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(max-width: 575px)')
    setIsCompactScreen(mediaWatcher.matches)

    const handleSizeChange = (e) => {
      setIsCompactScreen(e.matches)
    }
    mediaWatcher.addEventListener('change', handleSizeChange)

    return function cleanup() {
      mediaWatcher.removeEventListener('change', handleSizeChange)
    }
  })

  useEffect(() => {
    if (
      prevIsCompactScreen === undefined ||
      prevIsCompactScreen === isCompactScreen
    ) {
      return
    }

    if (!isCompactScreen && isOpen) {
      closeMenu()
    }
  }, [isCompactScreen])

  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        handleClick={openMenu}
        ariaControlsId={NAV_ID}
        ref={OpenButtonRef}
        className="open"
      />
      <NavOverlay
        id={NAV_ID}
        isOpen={isOpen}
        closeMenu={closeMenu}
        ref={CloseButtonRef}
      />
    </>
  )
}

export default Compact
