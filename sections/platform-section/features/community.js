import React from 'react'

import { Heading, Text, StaticBackgroundVideo } from 'components'

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
      <Heading variant={Heading.VARIANT.h3}>Community</Heading>
      <Text>
        Connect with other Startup Engineers to share knowledge and resources
        and to expand your network.
      </Text>
      <Text>
        Join interest-based groups for craft-centric learning or general
        interests.
      </Text>
      <Text>
        Ask for or receive help on a wide range of issues, from technical
        support to navigating startup life.
      </Text>
    </StyledFeaturesListItem>
  )
}

export default CommunityFeature
