import { rem } from 'polished'
import styled, { css } from 'styled-components'

const StyledText = styled.p`
  font-size: ${rem('16px')};
  font-weight: 500;
  line-height: ${rem('24px')};
  letter-spacing: 0rem;
  text-align: left;
  margin-top: ${rem('16px')};

  @media only screen and (max-width: 1023px) {
    text-align: center;
  }

  ${(props) =>
    props.sectionText &&
    css`
      font-weight: 600;
      font-size: ${rem('20px')};
      line-height: ${rem('32px')};
      text-align: center;
      margin-top: ${rem('24px')};
      margin-top: ${rem('64px')};
      color: #8493b0;

      @media only screen and (max-width: 1023px) {
      }

      @media only screen and (max-width: 413px) {
        font-weight: 700;
        font-size: ${rem('16px')};
        line-height: ${rem('24px')};
        margin-top: ${rem('80px')};
      }
    `}
`

const Text = (props) => <StyledText {...props} />

export default Text
