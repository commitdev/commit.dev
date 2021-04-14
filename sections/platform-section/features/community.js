import React from 'react'

import { StaticBackgroundVideo } from 'components'

import { SubHeadingBold } from '../../../components/heading'
import { FeatureText } from '../feature-text'
import { StyledFeaturesListItem } from '../styled-features-list-item'

function CommunityFeature(props) {
  return (
    <StyledFeaturesListItem
      {...props}
      media={
        <StaticBackgroundVideo
          name="community"
          alt="Screenshot of Commit's Community page"
        />
      }
    >
      <SubHeadingBold>Community</SubHeadingBold>
      <FeatureText>
        Connect with other Startup Engineers to share knowledge and resources
        and to expand your network.
      </FeatureText>
      <FeatureText>
        Join interest-based groups for craft-centric learning or general
        interests.
      </FeatureText>
      <FeatureText>
        Ask for or receive help on a wide range of issues, from technical
        support to navigating startup life.
      </FeatureText>
    </StyledFeaturesListItem>
  )
}

export default CommunityFeature
