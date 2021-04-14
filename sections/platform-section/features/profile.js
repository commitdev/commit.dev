import React from 'react'

import { StaticBackgroundVideo } from 'components'

import { SubHeadingBold } from '../../../components/heading'
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
      <SubHeadingBold>Platform profile</SubHeadingBold>
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
