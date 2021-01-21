import { rem } from 'polished'
import styled from 'styled-components'

const PageHeading = styled.h1`
  font-family: Montserrat;
  font-size: ${rem('64px')};
  font-style: normal;
  font-weight: 800;
  line-height: ${rem('80px')};
  letter-spacing: 0rem;
  text-align: left;
  margin-top: ${rem('12px')};

  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`

export default PageHeading
