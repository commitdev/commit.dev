import { rem } from 'polished'
import styled from 'styled-components'

const StyledLink = styled.a`
  display: block;
  background: #ff68ba;
  background: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
  width: fit-content;
  padding: ${rem('16px')} ${rem('70px')};
  border: 0;
  border-radius: 48px;
  font-weight: bold;
  font-size: ${rem('24px')};
  line-height: ${rem('29px')};
  text-align: center;
  color: #010242;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;

  :active,
  :focus {
    opacity: 0.7;
    outline: none;
  }

  @media only screen and (max-width: 413px) {
    font-size: ${rem('18px')};
    line-height: ${rem('22px')};
    padding: ${rem('16px')};
    width: 100%;
  }
`

// TODO: add href once page exists
const ApplyLink = (props) => (
  <StyledLink rel="noopener" {...props}>
    Apply to Join Us
  </StyledLink>
)

export default ApplyLink
