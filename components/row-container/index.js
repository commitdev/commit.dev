import { arrayOf, element, string } from 'prop-types'
import styled from 'styled-components'

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

RowContainer.propTypes = {
  className: string,
  children: arrayOf(element),
}

export default RowContainer
