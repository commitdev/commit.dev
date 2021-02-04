import { rem } from 'polished'
import { bool, func, string } from 'prop-types'
import styled, { css } from 'styled-components'

const NOOP = () => {}

const HamburgerButton = styled.button`
  display: none;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;

  @media only screen and (max-width: 575px) {
    display: inline-block;
    align-self: flex-end;
  }
`

const HamburgerLines = styled.span`
  margin: 4px;
  top: 50%;
  display: block;
  margin-top: -1px;

  &,
  &:after,
  &:before {
    position: absolute;
    width: 40px;
    height: 3px;
    border-radius: 3px;
    background-color: #ffffff;
    left: 0;
  }

  &:after {
    bottom: -12px;
    content: '';
  }

  &:before {
    top: -12px;
    content: '';
  }

  ${(p) =>
    p.active &&
    css`
      transform: rotate(45deg);

      &:after {
        bottom: 0;
        transform: rotate(90deg);
      }

      &:before {
        top: 0;
        opacity: 0;
      }
    `}
`

const HamburgerMenu = ({ isOpen, handleClick = NOOP, ariaControlsId }) => (
  <HamburgerButton
    type="button"
    aria-label="menu"
    aria-controls={ariaControlsId}
    onClick={handleClick}
  >
    <HamburgerLines active={isOpen} />
  </HamburgerButton>
)

HamburgerMenu.propTypes = {
  isOpen: bool,
  handleClick: func,
  ariaControlsId: string,
}

export default HamburgerMenu
