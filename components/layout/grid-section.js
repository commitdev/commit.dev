import styled from 'styled-components'

import { TABLET_SMALL_SIZE } from 'styles/constants'

const GridSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    flex-direction: column;
    align-items: center;
  }
`

export default GridSection
