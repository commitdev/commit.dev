import React from 'react'

import { oneOf, string } from 'prop-types'
import styled, { css } from 'styled-components'

import { StaticImage } from 'components'
import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

const SIZE = Object.freeze({
  small: 'small',
  large: 'large',
})

const SIZE_PERCENT = Object.freeze({
  small: 25,
  large: 33,
})

const getSize = (variant) => SIZE_PERCENT[variant] ?? SIZE_PERCENT.large

const Anchor = styled.a`
  min-width: 180px;
  padding: 36px;
  margin: 0;
  opacity: 0.5;
  transition: opacity 200ms ease-in-out;
  ${(props) => css`
    flex: 0 0 ${getSize(props.size)}%;
    max-width: ${getSize(props.size)}%;
  `}

  :hover {
    opacity: 0.75;
  }

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: 12px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 0;
    min-width: 125px;
    width: 48%;
    max-width: 150px;
  }
`

const CompanyLogo = ({ url, size, name, alt }) => (
  <Anchor href={url} rel="noopener noreferrer" size={size}>
    <StaticImage alt={alt} name={`logos/${name}`} />
  </Anchor>
)

CompanyLogo.defaultProps = {
  size: SIZE.large,
}

CompanyLogo.propTypes = {
  url: string.isRequired,
  name: string.isRequired,
  alt: string.isRequired,
  size: oneOf(Object.values(SIZE)),
}

CompanyLogo.SIZE = SIZE

export default CompanyLogo
