import styled from 'styled-components'

import { TABLET_SMALL_SIZE } from 'styles/constants'

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.3% - 48px);

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    width: 100%;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    max-width: 450px;
  }
`

export default GridItem
