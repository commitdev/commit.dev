import React from 'react'

import { Heading, Text } from 'components'

import { BackgroundVideo } from '../../../components/media'
import { getStaticVideo } from '../../../helpers/get-static-video'
import { StyledFeaturesListItem } from '../styled-features-list-item'

function CommunityFeature(props) {
  return (
    <StyledFeaturesListItem
      {...props}
      media={
        <BackgroundVideo
          {...getStaticVideo('community')}
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
