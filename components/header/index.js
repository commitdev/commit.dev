import styled, { css } from 'styled-components'

const Header = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 88px;

  color: #ffffff;

  ${(props) =>
    props.contentTitle &&
    css`
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #54ffff;
    `}
`

export default Header
