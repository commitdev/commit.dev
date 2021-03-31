import { rem } from 'polished'
import styled from 'styled-components'

import { TABLET_SMALL_SIZE, COLOR_VARIATIONS } from 'styles/constants'

import CompactMenu from './compact'
import Logo from './logo'
import StandardMenu from './standard'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  font-size: ${rem('16px')};
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${rem('14px')} ${rem('54px')};
  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    line-height: 0.5;
    padding: ${rem('24px')};
  }
`

const SiteHeader = () => (
  <StyledHeader>
    <Logo variation={COLOR_VARIATIONS.light} />
    <StandardMenu variation={COLOR_VARIATIONS.light} />
    <CompactMenu variation={COLOR_VARIATIONS.light} />
  </StyledHeader>
)

SiteHeader.VARIATIONS = COLOR_VARIATIONS

SiteHeader.propTypes = {}

SiteHeader.defaultProps = {}

export default SiteHeader
