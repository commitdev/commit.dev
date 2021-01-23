import styled from 'styled-components'

const Button = (props) => <StyledButton {...props} />

const StyledButton = styled.button`
  background: #ff68ba;
  background: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 48px;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
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
`

export default Button
