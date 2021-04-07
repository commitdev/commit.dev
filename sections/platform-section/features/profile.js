import React from 'react'

import { Text, Heading } from 'components'

import { BackgroundVideo } from '../../../components/media'
import { getStaticVideo } from '../../../helpers/get-static-video'
import { StyledFeaturesListItem } from '../styled-features-list-item'

function ProfileFeature(props) {
  return (
    <StyledFeaturesListItem
      {...props}
      media={
        <BackgroundVideo
          {...getStaticVideo('profile')}
          alt="Screenshot of Commit's Opportunities page"
        />
      }
    >
      <Heading variant={Heading.VARIANT.h3}>Platform profile</Heading>
      <Text>
        Your profile provides deep backgrounds that include your experience,
        skill sets, projects, blog posts and preferences.
      </Text>
      <Text>
        Let others know which technologies you want to work with and skills you
        want to learn.
      </Text>
    </StyledFeaturesListItem>
  )
}

export default ProfileFeature
