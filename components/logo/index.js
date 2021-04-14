import React from 'react'

import { string } from 'prop-types'
import styled from 'styled-components'

import { StaticImage } from 'components'

const Anchor = styled.a`
  min-width: 11.25rem;
  opacity: 0.5;
  transition: opacity 200ms ease-in-out;
  display: block;

  :hover {
    opacity: 0.75;
  }
`

const Logo = ({ url, name, alt }) => (
  <Anchor href={url} rel="noopener noreferrer" target="_blank">
    <StaticImage alt={alt} name={`logos/${name}`} />
  </Anchor>
)

Logo.propTypes = {
  url: string.isRequired,
  name: string.isRequired,
  alt: string.isRequired,
}

export default Logo
