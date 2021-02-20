import React from 'react'

import { oneOf, string } from 'prop-types'
import styled from 'styled-components'

import { DESKTOP_SIZE, TABLET_SIZE, MOBILE_SIZE } from 'styles/constants'

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: ${(props) => getSize(props.size) / 100};
  max-width: ${(props) => getSize(props.size)}%;
  min-width: 180px;
  padding: 36px;

  @media only screen and (max-width: ${DESKTOP_SIZE}) {
    margin: 0;
  }

  @media only screen and (max-width: ${TABLET_SIZE}) {
    padding: 12px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 0;
    min-width: 125px;
    width: 48%;
    max-width: 150px;
  }
`

const StyledImg = styled.img`
  max-width: 100%;
  opacity: 0.5;
  :hover {
    opacity: 0.75;
  }
`

const CompanyLogo = ({ url, logoSrc, alt, size }) => (
  <Anchor href={url} rel="noopener noreferrer" size={size}>
    <StyledImg alt={alt} src={logoSrc} />
  </Anchor>
)

CompanyLogo.defaultProps = {
  size: SIZE.large,
}

CompanyLogo.propTypes = {
  url: string.isRequired,
  logoSrc: string.isRequired,
  alt: string.isRequired,
  size: oneOf(Object.values(SIZE)),
}

CompanyLogo.SIZE = SIZE

export default CompanyLogo
