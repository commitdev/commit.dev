import { rem } from 'polished'
import { css } from 'styled-components'

import { TABLET_LARGE_SIZE, TABLET_SMALL_SIZE } from 'styles/constants'

export const rowStyles = css`
  margin-bottom: ${rem('110px')};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-bottom: ${rem('140px')};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    margin-bottom: ${rem('164px')};
  }
`
