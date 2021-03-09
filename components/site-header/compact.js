import React, { useEffect, useState } from 'react'

import { rem } from 'polished'
import { bool, func, string, oneOf } from 'prop-types'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'

import { SiteLinks, SocialIcons } from 'components'
import { usePrevious, useIsMaxScreenSize } from 'helpers/hooks'
import { TABLET_SMALL_SIZE, COLOR_VARIATIONS } from 'styles/constants'

import HamburgerMenu from './hamburger-menu'
import Logo from './logo'

const NAV_ID = 'site-navigation-small'

const { large: SOCIAL_ICON_SIZE_LARGE } = SocialIcons.SIZE

const NavOverlayRoot = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(68.66deg, #0f1011 0%, #010242 100%);
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

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    display: none;
    height: 0px;
  }
`

const FauxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${rem('32px')} ${rem('42px')} 0;
  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    line-height: 0.5;
    padding: ${rem('24px')} ${rem('24px')} 0;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding-left: ${rem('36px')};
  padding-right: ${rem('36px')};

  & a {
    color: #fff;
    text-decoration: none;
    margin-top: ${rem('36px')};
    font-size: ${rem('48px')};
    line-height: ${rem('58.51px')};
    font-weight: 800;
  }
`
const BurgerMenu = styled(HamburgerMenu)`
  margin-top: auto;
  margin-bottom: auto;
`

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 84px;

  a {
    margin: 0;
    margin-left: 32px;
  }
`

const NavOverlay = React.forwardRef(
  ({ id, isOpen, closeMenu, ...props }, ref) => {
    // Must check for process.browser; Without this, document is undefined because document is not available when nextjs renders this server side
    if (process.browser) {
      return ReactDOM.createPortal(
        <NavOverlayRoot id={id} isOpen={isOpen} {...props}>
          <FauxHeader>
            <Logo closeMenu={closeMenu} />
            <BurgerMenu
              isOpen={isOpen}
              handleClick={closeMenu}
              ariaControlsId={id}
              ref={ref}
              className="close"
            />
          </FauxHeader>
          <Nav>
            <SiteLinks closeMenu={closeMenu} />
            <SocialIconsContainer>
              <SocialIcons size={SOCIAL_ICON_SIZE_LARGE} />
            </SocialIconsContainer>
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

const Compact = ({ variation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isCompactScreen = useIsMaxScreenSize(TABLET_SMALL_SIZE)
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

  // handle focus transfer between buttons when opening and closing
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

  // if screen size changes from compact to standard when overlay is open, close overlay
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
      <BurgerMenu
        variation={variation}
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

Compact.propTypes = {
  variation: oneOf(
    Object.keys(COLOR_VARIATIONS).map((k) => COLOR_VARIATIONS[k]),
  ),
}

export default Compact
