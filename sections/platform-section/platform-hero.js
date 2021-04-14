import React from 'react'

import { linearGradient, rem } from 'polished'
import styled from 'styled-components'

import { Text } from 'components'
import { TABLET_SMALL_SIZE } from 'styles/constants'

import { SectionHeadingBold } from '../../components/heading'
import { fontSmoothingAntialiased } from '../../styles/font-smoothing'
import { rowStyles } from './row-styles'

const PLATFORM_HEADING_GRAD = linearGradient({
  colorStops: ['#12c6ff 0%', '#6184c9 68.23%'],
  toDirection: '234.45deg',
  fallback: '#12c6ff',
})

const PlatformHeroHeading = styled(SectionHeadingBold)`
  font-size: ${rem('28px')};
  text-align: center;
  color: transparent;
  ${PLATFORM_HEADING_GRAD}
  -webkit-background-clip: text;
  background-clip: text;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    font-size: ${rem('48px')};
  }
`

const PlatformHeroText = styled(Text)`
  font-weight: 600;
  font-size: ${rem('21px')};
  line-height: 1.5;
  margin: 0 auto;
  padding: ${rem('24px')} 0 0 0;
  max-width: ${rem('790px')};
  color: #8493b0;
`

const PlatformHeroContainer = styled.div`
  max-width: ${rem('800px')};
  margin-left: auto;
  margin-right: auto;
  ${rowStyles}
  ${fontSmoothingAntialiased}
  padding: 0 ${rem(36)};
`

function PlatformHero(props) {
  return (
    <PlatformHeroContainer {...props}>
      <PlatformHeroHeading>The Commit Platform</PlatformHeroHeading>
      <PlatformHeroText sectionText>
        The Commit platform reinvents how passionate Startup Engineers grow
        their craft and their careers. It’s not a job board or an online resume,
        it’s a collaborative community with resources to grow your technical and
        essential skills, help you discover exciting new startups, and a space
        to connect with other Startup Engineers.
      </PlatformHeroText>
    </PlatformHeroContainer>
  )
}

export default PlatformHero
