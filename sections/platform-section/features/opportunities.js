import React from 'react'

import { Text, Heading } from 'components'

import { BackgroundVideo } from '../../../components/media'
import { getStaticVideo } from '../../../helpers/get-static-video'
import { StyledFeaturesListItem } from '../styled-features-list-item'

function OpportunitiesFeature(props) {
  return (
    <StyledFeaturesListItem
      {...props}
      media={
        <BackgroundVideo
          {...getStaticVideo('community')}
          alt="Screenshot of Commit's Opportunities page"
        />
      }
    >
      <Heading variant={Heading.VARIANT.h3}>Opportunities</Heading>
      <Text>
        Browse personalized startup recommendations selected for you by our
        team.
      </Text>
      <Text>
        Deep dive into individual opportunities with detailed background
        information and specific insights we've gathered by critically assessing
        their business.
      </Text>
      <Text>Schedule meetings with company leaders to learn more.</Text>
      <Text>
        Start a three month pilot project to gauge mutual fit, move on to
        another pilot if it’s not right for you.
      </Text>
    </StyledFeaturesListItem>
  )
}

export default OpportunitiesFeature
