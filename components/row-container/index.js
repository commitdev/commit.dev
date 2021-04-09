import React from 'react'

import { arrayOf, element, string } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const RowContainer = ({ className, children }) => (
  <Container className={className}>{children}</Container>
)

RowContainer.propTypes = {
  className: string,
  children: arrayOf(element),
}

export default RowContainer
