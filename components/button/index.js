import { createPopup } from '@typeform/embed'
import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MOBILE_SIZE } from 'styles/constants'
import '@typeform/embed/build/css/popup.css'

const StyledApplyLink = styled.button`
  display: block;
  background: #ff68ba;
  background: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
  width: ${(props) =>
    props.customWidth ? rem(props.customWidth) : rem('256px')};
  padding: ${rem('15px')} ${rem('42px')};
  border: 0;
  border-radius: 48px;
  font-weight: bold;
  font-size: ${rem('18px')};
  line-height: ${rem('30px')};
  text-align: center;
  color: #000;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration-line: none;
  font-family: inherit;
  white-space: nowrap;

  :hover {
    position: relative;
    background-image: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
    color: white;
    span {
      display: none;
    }
    :before {
      content: 'print ( join ) ;';
      position: relative;
      z-index: 2;
    }
    :after {
      z-index: 1;
      background: ${(props) => props.hoverBackground || '#100c1c'};
      border-radius: 48px;
      content: '';
      position: absolute;
      display: block;
      top: 3px;
      bottom: 3px;
      left: 3px;
      right: 3px;
    }
  }

  :active,
  :focus {
    opacity: 0.7;
    outline: none;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: ${rem('16px')};
    line-height: ${rem('20px')};
    width: 100%;
  }
`

const openTypeform = () => (
  createPopup('czZWb1bn', {
    size: 75,
  }).open()
)

const ApplyLink = ({ text = 'Join the waitlist', ...props }) => (
  <StyledApplyLink {...props} onClick={openTypeform}>
    <span>{text}</span>
  </StyledApplyLink>
)

ApplyLink.propTypes = {
  text: string,
}

export default ApplyLink
