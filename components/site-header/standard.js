import { oneOf } from 'prop-types'
import styled from 'styled-components'

import { SiteLinks } from 'components'
import { TABLET_SMALL_SIZE, COLOR_VARIATIONS } from 'styles/constants'

const Nav = styled.nav`
  a {
    color: ${(p) =>
      p.variation === COLOR_VARIATIONS.dark ? '#ffffff' : '#010242'};
  }
  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    display: none;
  }
`

const Standard = ({ variation }) => (
  <Nav variation={variation}>
    <SiteLinks />
  </Nav>
)

Standard.propTypes = {
  variation: oneOf(
    Object.keys(COLOR_VARIATIONS).map((k) => COLOR_VARIATIONS[k]),
  ),
}

export default Standard
