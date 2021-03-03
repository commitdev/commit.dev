import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 100%;
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
  color: inherit;
  font-family: inherit;

  resize: vertical;
  width: 100%;
  height: 10rem;

  :focus {
    outline: none;
  }
`

const TextArea = (props) => <StyledTextArea {...props} />

export default TextArea
