import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 1.2rem 2rem;
  background: rgba(236, 236, 236, 0.2);
  border-radius: 24px;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 18px;
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
