import { rem } from 'polished'
import { oneOf } from 'prop-types'
import styled from 'styled-components'

import { COLOR_VARIATIONS } from './constants'

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

const Logo = ({ variation }) => (
  <>
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
  </>
)

Logo.propTypes = {
  variation: oneOf(
    Object.keys(COLOR_VARIATIONS).map((k) => COLOR_VARIATIONS[k]),
  ),
}

Logo.defaultProps = {
  variation: COLOR_VARIATIONS.dark,
}

export default Logo
