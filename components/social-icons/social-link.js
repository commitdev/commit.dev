import React from 'react'

import { string, node } from 'prop-types'
import styled from 'styled-components'

import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

const Anchor = styled.a`
  margin: 0 16px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 8px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0 14px;
  }
`

const SocialLink = ({ href, children }) => (
  <Anchor href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Anchor>
)

SocialLink.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
}

export default SocialLink
