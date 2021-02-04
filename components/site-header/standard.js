import styled from 'styled-components'
import Links from './links'

const Nav = styled.nav`
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const Standard = () => (
  <Nav>
    <Links />
  </Nav>
)

export default Standard
