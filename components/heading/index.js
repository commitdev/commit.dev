import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MOBILE_SIZE } from 'styles/constants'

const VARIANT = Object.freeze({
  h2: 'h2',
  h3: 'h3',
})

const Heading = ({ variant, ...props }) => {
  switch (variant) {
    case VARIANT.h2:
      return <StyledHeading2 {...props} />
    case VARIANT.h3:
      return <StyledHeading3 {...props} />
    default:
      return <StyledHeading1 {...props} />
  }
}

Heading.VARIANT = VARIANT

Heading.propTypes = {
  variant: string,
}

const StyledHeading1 = styled.h1`
  font-family: Montserrat;
  font-size: ${rem('48px')};
  font-weight: 800;
  line-height: ${rem('60px')};
  letter-spacing: 0rem;
  margin: 0;
`

const StyledHeading2 = styled.h2`
  font-family: Montserrat;
  font-size: ${rem('36px')};
  font-weight: 800;
  line-height: ${rem('44px')};
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  margin: 0;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: ${rem('28px')};
    line-height: ${rem('34px')};
    text-align: center;
    letter-spacing: initial;
  }
`

const StyledHeading3 = styled.h3`
  font-family: Montserrat;
  font-size: ${rem('24px')};
  font-weight: 700;
  line-height: ${rem('24px')};
  margin: 0;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    text-align: center;
  }
`

export default Heading
