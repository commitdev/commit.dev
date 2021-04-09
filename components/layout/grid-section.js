import styled from 'styled-components'

import {
  TABLET_LARGE_SIZE,
  TABLET_SMALL_SIZE,
  MOBILE_SIZE,
} from 'styles/constants'

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 72px;
  max-width: 1240px;
  margin: 0 auto;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    column-gap: 24px;
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    grid-template-columns: 1fr;
  }
`

export default GridSection
