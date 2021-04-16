import React from 'react'

import { oneOf } from 'prop-types'
import styled from 'styled-components'

import SocialLink from './social-link'

const SIZE = Object.freeze({
  small: 'small',
  large: 'large',
})

const SIZE_TO_UNIT = Object.freeze({
  small: '32px',
  large: '48px',
})

const StyledImg = styled.img`
  width: ${(props) => SIZE_TO_UNIT[props.size]};
`

const SocialIcons = ({ size }) => (
  <>
    <SocialLink href="https://github.com/commitdev/">
      <StyledImg
        alt="Commit's GitHub organization page"
        src="/logo-github.svg"
        size={size}
      />
    </SocialLink>
    <SocialLink href="https://www.linkedin.com/company/commitdev/">
      <StyledImg
        alt="Commit's LinkedIn company page"
        src="/logo-linkedin.svg"
        size={size}
      />
    </SocialLink>
    <SocialLink href="https://twitter.com/commitdev">
      <StyledImg
        alt="Commit's Twitter page"
        src="/logo-twitter.svg"
        size={size}
      />
    </SocialLink>
  </>
)

SocialIcons.defaultProps = {
  size: SIZE.small,
}

SocialIcons.propTypes = {
  size: oneOf(Object.values(SIZE)),
}

SocialIcons.SIZE = SIZE

export default SocialIcons
