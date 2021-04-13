import React from 'react'

import { Heading, StaticBackgroundVideo } from 'components'

import { FeatureText } from '../feature-text'
import { StyledFeaturesListItem } from '../styled-features-list-item'

function ProfileFeature(props) {
  return (
    <StyledFeaturesListItem
      {...props}
      media={
        <StaticBackgroundVideo
          name="profile"
          alt="Screenshot of Commit's Opportunities page"
        />
      }
    >
      <Heading variant={Heading.VARIANT.h3}>Platform profile</Heading>
      <FeatureText>
        Your profile provides deep backgrounds that include your experience,
        skill sets, projects, blog posts and preferences.
      </FeatureText>
      <FeatureText>
        Let others know which technologies you want to work with and skills you
        want to learn.
      </FeatureText>
    </StyledFeaturesListItem>
  )
}

export default ProfileFeature
