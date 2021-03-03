import { rem } from 'polished'
import styled, { css } from 'styled-components'

import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

const StyledText = styled.p`
  font-family: lato;
  font-size: ${rem('16px')};
  font-weight: 500;
  line-height: ${rem('24px')};
  letter-spacing: 0rem;
  text-align: left;
  margin-top: ${rem('16px')};

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    text-align: center;
  }

  ${(props) =>
    props.successText &&
    css`
      font-weight: normal;
      font-size: 21px;
      line-height: 26px;
      margin-top: ${rem('24px')};
      margin-bottom: ${rem('24px')};
    `}

  ${(props) =>
    props.errorText &&
    css`
      font-size: 21px;
      line-height: 26px;
      color: #ff4545;
      margin-top: ${rem('24px')};
      margin-bottom: ${rem('24px')};
    `}

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

      @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
      }

      @media only screen and (max-width: ${MOBILE_SIZE}) {
        font-weight: 700;
        font-size: ${rem('16px')};
        line-height: ${rem('24px')};
        margin-top: ${rem('80px')};
      }
    `}
`

const Text = (props) => <StyledText {...props} />

export default Text
