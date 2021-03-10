import Link from 'next/link'
import { rem } from 'polished'
import { oneOf, func } from 'prop-types'
import styled from 'styled-components'

import { NOOP } from 'helpers/utils'
import { TABLET_SMALL_SIZE, COLOR_VARIATIONS } from 'styles/constants'

const LogoImg = styled.img`
  width: ${rem('212px')};

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    display: none;
  }
`

const SmallLogoImg = styled.img`
  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    display: none;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const Logo = ({ variation, closeMenu }) => (
  <Link href="/" passHref>
    <Anchor aria-label="Home" onClick={closeMenu}>
      <LogoImg
        src={
          variation === COLOR_VARIATIONS.dark
            ? '/commit-logo.svg'
            : '/commit-logo-dark.svg'
        }
        alt="Commit Logo"
      />
      <SmallLogoImg
        src={
          variation === COLOR_VARIATIONS.dark
            ? '/commit-logo-small.svg'
            : '/commit-logo-small-dark.svg'
        }
        alt="Commit Logo"
      />
    </Anchor>
  </Link>
)

Logo.propTypes = {
  variation: oneOf(
    Object.keys(COLOR_VARIATIONS).map((k) => COLOR_VARIATIONS[k]),
  ),
  closeMenu: func,
}

Logo.defaultProps = {
  variation: COLOR_VARIATIONS.dark,
  closeMenu: NOOP,
}

export default Logo
