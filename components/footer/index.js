import styled from 'styled-components'

import { Text, ApplyLink } from 'components'
import { TABLET_LARGE_SIZE, MOBILE_SIZE } from 'styles/constants'

const FooterContainer = styled.footer`
  padding: 150px 0 40px;
  color: #ffffff;
  background: #000000;
  background: linear-gradient(68.66deg, #0f1011 0%, #010242 100%);

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 98px 0px 68px;
  }

  p {
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 4rem;

    @media only screen and (max-width: ${MOBILE_SIZE}) {
      margin-bottom: 3rem;
    }
  }

  a {
    max-width: 23.75rem;
    margin-bottom: 200px;
  }

  img {
    height: 45px;
  }
`

const FlexSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    max-width: none;
    margin: 0 20px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    max-width: none;
    margin: 0 36px;
  }
`

const Footer = (props) => (
  <FooterContainer {...props}>
    <FlexSection>
      <Text>Interested in Taking Control of your Career?</Text>
      <ApplyLink>Apply to Join Us</ApplyLink>
      <img alt="Commit logo" src="/commit-logo.svg" />
    </FlexSection>
  </FooterContainer>
)

export default Footer
