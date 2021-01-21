import { rem } from 'polished'
import styled, { css } from 'styled-components'

const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;
  ${(props) =>
    props.successText &&
    css`
      font-weight: normal;
      font-size: 18px;
      margin-top: ${rem('24px')};
      margin-bottom: ${rem('24px')};
    `}

  ${(props) =>
    props.errorText &&
    css`
      line-height: 21px;
      color: #ff4545;
      margin-top: ${rem('24px')};
      margin-bottom: ${rem('24px')};
    `}
`

export default Text
