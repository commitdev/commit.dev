import { rem } from 'polished'
import styled from 'styled-components'

import { TABLET_SMALL_SIZE, COLOR_VARIATIONS } from 'styles/constants'

import useIsScrolledFromTop from '../../helpers/hooks/use-is-scrolled-from-top'
import CompactMenu from './compact'
import Logo from './logo'
import StandardMenu from './standard'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  font-size: ${rem('16px')};
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  transition: background-color 200ms ease-in-out, padding 200ms ease-in-out;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)'};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${rem('14px')} ${rem('54px')};
  padding-top: ${({ isScrolled }) => (isScrolled ? rem('14px') : rem('32px'))};

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    line-height: 0.5;
    padding: ${rem('24px')};
  }
`

const SiteHeader = () => {
  const isScrolledFromTop = useIsScrolledFromTop(10, 40)
  const colorVariation = isScrolledFromTop
    ? COLOR_VARIATIONS.light
    : COLOR_VARIATIONS.dark

  return (
    <StyledHeader isScrolled={isScrolledFromTop}>
      <Logo variation={colorVariation} />
      <StandardMenu variation={colorVariation} />
      <CompactMenu variation={colorVariation} />
    </StyledHeader>
  )
}

SiteHeader.VARIATIONS = COLOR_VARIATIONS

SiteHeader.propTypes = {}

SiteHeader.defaultProps = {}

export default SiteHeader
