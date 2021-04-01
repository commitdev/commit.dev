import Link from 'next/link'
import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MOBILE_SIZE } from 'styles/constants'

const StyledLink = styled.a`
  display: block;
  background: #ff68ba;
  background: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
  width: 316px;
  padding: ${rem('15px')} ${rem('42px')};
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
  white-space: nowrap;

  :hover {
    background: linear-gradient(
      90.03deg,
      rgba(255, 104, 186, 0.25) 0.39%,
      rgba(237, 194, 129, 0.25) 99.97%
    );
    color: white;
    span {
      display: none;
    }
    :before {
      content: 'apply ( join ) ;';
    }
  }

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

const ApplyLink = ({displayedText, ...props}) => (
  <Link href="/apply" passHref>
    <StyledLink rel="noopener" {...props}>
      <span>{displayedText}</span>
    </StyledLink>
  </Link>
)

ApplyLink.propTypes = {
  displayedText: string,
}


export default ApplyLink
