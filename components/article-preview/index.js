import React from 'react'

import { string } from 'prop-types'
import styled from 'styled-components'

import { Text, MediaContainer } from 'components'
import { GridItem } from 'components/layout'
import { TABLET_SMALL_SIZE } from 'styles/constants'

import { children } from '../../helpers/prop-types'
import { SubHeading } from '../heading'

const Root = styled(GridItem)`
  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin: 0;
  }
`

const Heading = styled(SubHeading)`
  margin: 1.25rem 0;
  text-align: center;
`

const StyledMediaContainer = styled(MediaContainer)`
  width: 100%;
  height: 200px;
`

const ArticlePreview = ({ media, heading, text, link, ...props }) => (
  <Root {...props}>
    <a href={link} rel="noopener">
      <StyledMediaContainer>{media}</StyledMediaContainer>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </a>
  </Root>
)

ArticlePreview.propTypes = {
  media: children,
  heading: string,
  text: string,
  link: string,
}

export default ArticlePreview
