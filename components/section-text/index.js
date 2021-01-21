import { rem } from 'polished'
import styled, { css } from 'styled-components'

const SectionText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: ${rem('18px')};
  line-height: ${rem('28px')};
  color: #ffffff;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  ${(props) =>
    props.mobileHeader &&
    css`
      @media only screen and (max-width: 767px) {
        display: block;
        text-align: center;
        margin: 0px ${rem('24px')};
      }
      @media only screen and (min-width: 767px) {
        display: none;
      }
    `}
`

export default SectionText
