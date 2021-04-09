import React from 'react'

import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Heading, Text, MediaContainer } from 'components'
import { GridItem } from 'components/layout'
import { MOBILE_SIZE } from 'styles/constants'

import { children } from '../../helpers/prop-types'

const Root = styled(GridItem)`
  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: ${rem('21px')};
    height: 4rem;
    margin: 1.25rem 0;
    text-align: center;

    @media only screen and (max-width: ${MOBILE_SIZE}) {
      height: auto;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin: 0;
  }
`

const StyledMediaContainer = styled(MediaContainer)`
  width: 100%;
  height: 200px;
`

const ArticlePreview = ({ media, heading, text, link, ...props }) => (
  <Root {...props}>
    <a href={link} rel="noopener">
      <StyledMediaContainer>{media}</StyledMediaContainer>
      <Heading variant={Heading.VARIANT.h3}>{heading}</Heading>
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
