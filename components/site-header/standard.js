import { oneOf } from 'prop-types'
import styled from 'styled-components'

import { COLOR_VARIATIONS } from './constants'
import Links from './links'

const Nav = styled.nav`
  a {
    color: ${(p) =>
      p.variation === COLOR_VARIATIONS.dark ? '#ffffff' : '#010242'};
  }
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const Standard = ({ variation }) => (
  <Nav variation={variation}>
    <Links />
  </Nav>
)

Standard.propTypes = {
  variation: oneOf(
    Object.keys(COLOR_VARIATIONS).map((k) => COLOR_VARIATIONS[k]),
  ),
}

export default Standard
