import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { TABLET_LARGE_SIZE } from 'styles/constants'

const StyledText = styled.div`
  display: inline-block;
  font-family: lato;
  font-weight: 500;
  text-align: left;
  line-height: ${rem('21px')};
  color: #ff4545;
  margin-bottom: ${rem('12px')};

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    text-align: center;
  }
`

const ErrorMessage = ({message, ...props}) => (
  <StyledText {...props}>{message}</StyledText>
)

ErrorMessage.propTypes = {
  message: string.isRequired,
}

export default ErrorMessage
