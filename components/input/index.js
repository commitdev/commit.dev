import styled from 'styled-components'

const Input = (props) => <StyledInput {...props} />

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  padding: 6px 24px;
  background: rgba(236, 236, 236, 0.1);
  border-radius: 4px;
  margin-bottom: 2rem;
  font-family: lato;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  text-align: left;
  color: inherit;
  font-family: inherit;

  :focus {
    outline: none;
  }
`

export default Input
