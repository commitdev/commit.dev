import Link from 'next/link'
import { rem } from 'polished'
import styled from 'styled-components'

import { MOBILE_SIZE } from 'styles/constants'

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
  text-decoration-line: none;
  font-family: inherit;

  :active,
  :focus {
    opacity: 0.7;
    outline: none;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: ${rem('18px')};
    line-height: ${rem('22px')};
    padding: ${rem('16px')};
    width: 100%;
  }
`

const ApplyLink = (props) => (
  <Link href="/apply" passHref>
    <StyledLink rel="noopener" {...props}>
      Apply to Join Us
    </StyledLink>
  </Link>
)

export default ApplyLink
