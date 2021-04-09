import styled from 'styled-components'

import { MOBILE_SIZE, TABLET_SMALL_SIZE } from 'styles/constants'

const GridItem = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    margin-bottom: 4.5rem;

    &:last-of-type {
      grid-column: 3 / span 4;
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    grid-column: 1 / span 1;

    &:last-of-type {
      grid-column: 1 / span 1;
    }
  }
`

export default GridItem
