import React from 'react'

import { oneOf, string } from 'prop-types'
import styled from 'styled-components'

import { DESKTOP_SIZE, TABLET_SIZE, MOBILE_SIZE } from 'styles/constants'

const SIZE = Object.freeze({
  small: 'small',
  large: 'large',
})

const getSize = (variant) => {
  switch (variant) {
    case SIZE.large:
      return '256px'
    case SIZE.small:
      return '220px'
    default:
      return '256px'
  }
}

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  padding: 24px;
  min-width: 180px;
  width: 30%;
  max-width: ${(props) => getSize(props.size)};
  margin: 24px 0px;
  opacity: 0.5;
  :hover {
    opacity: 0.75;
  }

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

const CompanyLogo = ({ url, logoSrc, alt, size }) => (
  <Anchor href={url} rel="noopener noreferrer">
    <StyledImg alt={alt} src={logoSrc} size={size} />
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
