import { rem } from 'polished'
import styled, { css } from 'styled-components'

import { TABLET_SMALL_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

const commonHeadingStyles = css`
  font-family: Montserrat;
`

const HeroHeading = styled.h1`
  ${commonHeadingStyles}
  font-weight: 800;
  font-size: ${rem(32)};
  line-height: 1.3;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    font-size: ${rem(48)};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    font-size: ${rem(64)};
  }
`

const SectionHeading = styled.h2`
  font-weight: 400;
  font-size: ${rem(24)};
  line-height: 1.5;
  letter-spacing: 0.05em;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    font-size: ${rem(36)};
  }
`

const SectionHeadingBold = styled.h2`
  font-weight: 800;
  text-transform: uppercase;
  font-size: ${rem(28)};
  line-height: 1.2;
  letter-spacing: 0.1em;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    font-size: ${rem(36)};
  }
`

const SubHeading = styled.h3`
  font-weight: 700;
  font-size: ${rem(16)};
  line-height: 1.3;
  letter-spacing: 0.05em;
`

const SubHeadingBold = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  font-size: ${rem(24)};
  line-height: 1.2;
  letter-spacing: 0.1em;
`

export {
  HeroHeading,
  SectionHeading,
  SectionHeadingBold,
  SubHeading,
  SubHeadingBold,
}
