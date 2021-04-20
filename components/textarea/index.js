import { Field } from 'formik'
import styled from 'styled-components'

import { fontSmoothingAntialiased } from '../../styles/font-smoothing'

const StyledTextArea = styled(Field)`
  width: 100%;
  height: 174px;
  border: 0;
  padding: 24px;
  background: rgba(236, 236, 236, 0.1);
  border-radius: 4px;
  margin-bottom: 2rem;
  font-family: lato;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #ffffff;

  resize: vertical;
  width: 100%;
  height: 10rem;

  ${fontSmoothingAntialiased}

  ::placeholder {
    opacity: 0.7;
    color: #ffffff;
  }

  :focus {
    outline: none;
  }
`

const TextArea = (props) => <StyledTextArea as='textarea' {...props} />

export default TextArea
