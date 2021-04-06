import React from 'react'

import { linearGradient, rem } from 'polished'
import styled from 'styled-components'

import { TABLET_LARGE_SIZE, TABLET_SMALL_SIZE } from 'styles/constants'

import FeaturesList from '../../components/features-list'
import CommunityFeature from './features/community'
import OpportunitiesFeature from './features/opportunities'
import ProfileFeature from './features/profile'
import PlatformHero from './platform-hero'

const PLATFORM_BACKGROUND_GRAD = linearGradient({
  colorStops: ['#0f1011 26.79%', '#010242 86.47%'],
  toDirection: '49.1deg',
  fallback: '#0f1011',
})

const PlatformContainer = styled.section`
  padding: ${rem('84px')} 0;
  ${PLATFORM_BACKGROUND_GRAD}

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    padding: ${rem('140px')} 0;
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    padding: ${rem('164px')} 0;
  }
`

function PlatformSection() {
  return (
    <PlatformContainer>
      <PlatformHero />
      <FeaturesList>
        <ProfileFeature />
        <OpportunitiesFeature />
        <CommunityFeature />
      </FeaturesList>
    </PlatformContainer>
  )
}

export default PlatformSection
