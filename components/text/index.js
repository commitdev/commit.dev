import { rem } from 'polished'
import styled, { css } from 'styled-components'

const StyledText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;
  letter-spacing: 0rem;
  text-align: left;
  margin-top: 0.25rem;

  @media only screen and (max-width: 767px) {
    text-align: center;

    :last-of-type {
      margin-bottom: 5.25rem;
    }
  }

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

const Text = (props) => <StyledText {...props} />

export default Text
