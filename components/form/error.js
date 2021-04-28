import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledText = styled.div`
  display: inline-block;
  font-weight: 300;
  text-align: left;
  line-height: ${rem('21px')};
  color: #ff4545;
  margin-bottom: ${rem('12px')};

  @media only screen and (max-width: 1023px) {
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
