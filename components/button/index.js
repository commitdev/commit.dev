import { rem } from 'polished'
import styled from 'styled-components'

const Button = (props) => <StyledButton {...props} />

const StyledButton = styled.button`
  background: #ff68ba;
  background: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
  width: 100%;
  padding: ${rem('16px')};
  border: 0;
  border-radius: 48px;
  font-weight: bold;
  font-size: ${rem('24px')};
  line-height: ${rem('29px')};
  text-align: center;
  color: #010242;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;

  :active,
  :focus {
    opacity: 0.7;
    outline: none;
  }

  @media only screen and (max-width: 413px) {
    font-size: ${rem('18px')};
    line-height: ${rem('22px')};
  }
`

export default Button
