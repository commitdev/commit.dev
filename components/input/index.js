import { Field } from 'formik'
import styled from 'styled-components'

import { fontSmoothingAntialiased } from '../../styles/font-smoothing'

const Input = (props) => <StyledInput {...props} />

const StyledInput = styled(Field)`
  width: 100%;
  height: 50px;
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
  color: #ffffff;
  ${fontSmoothingAntialiased}

  ::placeholder {
    opacity: 0.7;
    color: #ffffff;
  }

  :focus {
    outline: none;
  }
`

export default Input
