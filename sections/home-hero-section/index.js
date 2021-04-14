import { rem } from 'polished'
import Typist from 'react-typist'
import styled from 'styled-components'

import { ApplyLink, Text } from 'components'
import { WhatsRight } from 'sections'
import 'react-typist/dist/Typist.css'
import {
  MOBILE_ONLY,
  TABLET_LARGE_ONLY,
  DESKTOP_ONLY,
  TABLET_LARGE_AND_DESKTOP,
  COLORS,
} from 'styles/constants'

import { HeroHeading } from '../../components/heading'

const DarkSection = styled.section`
  color: #ffffff;
  background: linear-gradient(68.66deg, #0f1011 0%, #010242 100%);
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 36px;

  ${TABLET_LARGE_ONLY} {
    padding: 0 8%;
  }

  ${DESKTOP_ONLY} {
    margin: 0 auto;
    padding: 0 120px;
  }
`

const HeroContent = styled.div`
  max-width: 50rem;
`

const StyledHeading = styled(HeroHeading)`
  margin-top: ${rem('224px')};
  margin-bottom: 0.75em;

  && {
    font-size: ${rem('48px')};
  }

  ${TABLET_LARGE_ONLY} {
    margin-top: ${rem('478px')};
  }

  ${DESKTOP_ONLY} {
    margin-top: ${rem('338px')};
    margin-bottom: 1.1em;
  }
`

const StyledText = styled(Text)`
  color: #ffffff;
  font-family: Montserrat;
  font-size: ${rem('24px')};
  line-height: 1.5;
  text-align: left;

  ${TABLET_LARGE_AND_DESKTOP} {
    font-size: ${rem('26px')};
  }
`

const HeroText = styled(StyledText)`
  font-weight: 400;
  margin: 1.5em 0 2.7em;

  ${TABLET_LARGE_AND_DESKTOP} {
    margin: 2em 0;
  }
`

const HeroTextExtra = styled.span`
  display: block;
  font-weight: 600;
  margin-top: 2em;

  ${TABLET_LARGE_AND_DESKTOP} {
    margin-top: 0;
  }
`

const HeroApplyLink = styled(ApplyLink)`
  margin-bottom: 5.3em;
  font-size: 1.125em;
  line-height: 1.375em;

  ${MOBILE_ONLY} {
    max-width: 100%;
    min-width: 100%;
  }

  ${TABLET_LARGE_ONLY} {
    margin-bottom: 8.5em;
  }

  ${DESKTOP_ONLY} {
    margin-bottom: 6.5em;
  }
`

const HeroTagLine = styled(Typist)`
  color: ${COLORS.shipCoveBlue};
  font-weight: 600;
  margin-bottom: 2em;
  
  ${MOBILE_ONLY} {
    font-size: ${rem('20px')};
  }

  .Cursor {
    font-weight: 100;
  }
`

const HomeHero = () => (
  <DarkSection>
    <StyledSection>
      <HeroContent>
        <StyledHeading>Refactor your career</StyledHeading>
        <HeroText>
          Until now, your growth was dependent on your company.
          <HeroTextExtra>We changed that.</HeroTextExtra>
        </HeroText>
        <HeroApplyLink />
        <StyledText as="div">
          <HeroTagLine
            startDelay={2500}
            avgTypingDelay={75}
            stdTypingDelay={20}
          >
            chown $USER . / startup_career&nbsp;
          </HeroTagLine>
        </StyledText>
      </HeroContent>
      <WhatsRight />
    </StyledSection>
  </DarkSection>
)

export default HomeHero
