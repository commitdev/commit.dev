import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

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
  font-size: ${rem('64px')};
  font-weight: 800;
  line-height: ${rem('80px')};
  letter-spacing: 0rem;
  margin-top: ${rem('12px')};
`
const StyledHeading2 = styled.h2`
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 1.375rem;
  letter-spacing: 0.1rem;
  color: #54ffff;
  text-transform: uppercase;
  margin-top: 2.625rem;
  margin-bottom: 0rem;

  :first-of-type {
    margin-top: 5.25rem;
  }
`

const StyledHeading3 = styled.h3`
  font-weight: 500;
  font-size: ${rem('18px')};
  margin-bottom: ${rem('42px')};
`

export default Heading
