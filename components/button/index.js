import Link from 'next/link'
import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MOBILE_SIZE } from 'styles/constants'

const Button = (props) => <StyledButton {...props} />

const StyledButton = styled.button`
  background: #ff68ba;
  background: linear-gradient(90.03deg, #ff68ba 0.39%, #edc281 99.97%);
  width: 100%;
  padding: ${rem('16px')};
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

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: ${rem('18px')};
    line-height: ${rem('22px')};
  }
`

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
      background: ${props => props.onHoverBackground || '#100c1c'};
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
    font-size: ${rem('18px')};
    line-height: ${rem('22px')};
    padding: ${rem('16px')};
    width: 100%;
  }
`

const LinkButton = ({href, text, ...props}) => (
  <Link {...{href, text}} passHref>
    <StyledLink rel="noopener" {...props}>
      <span>{text}</span>
    </StyledLink>
  </Link>
)

LinkButton.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
}

const ApplyLink = ({ href = '/apply', text = 'Join the waitlist', ...props } ) => (
  <LinkButton {...{href, text, ...props}} />
)

ApplyLink.propTypes = {
  href: string,
  text: string,
}

export { Button, ApplyLink }
