import React from 'react'

import { StaticBackgroundVideo } from 'components'

import { SubHeadingBold } from '../../../components/heading'
import { FeatureText } from '../feature-text'
import { StyledFeaturesListItem } from '../styled-features-list-item'

function OpportunitiesFeature(props) {
  return (
    <StyledFeaturesListItem
      {...props}
      media={
        <StaticBackgroundVideo
          name="opportunities"
          alt="Screenshot of Commit's Opportunities page"
        />
      }
    >
      <SubHeadingBold>Opportunities</SubHeadingBold>
      <FeatureText>
        Browse personalized startup recommendations selected for you by our
        team.
      </FeatureText>
      <FeatureText>
        Deep dive into individual opportunities with detailed background
        information and specific insights we've gathered by critically assessing
        their business.
      </FeatureText>
      <FeatureText>
        Schedule meetings with company leaders to learn more.
      </FeatureText>
      <FeatureText>
        Start a three month pilot project to gauge mutual fit, move on to
        another pilot if it’s not right for you.
      </FeatureText>
    </StyledFeaturesListItem>
  )
}

export default OpportunitiesFeature
