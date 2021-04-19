import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MediaContainer } from 'components'
import {
  TABLET_SMALL_SIZE,
  TABLET_LARGE_SIZE,
  MOBILE_SIZE,
} from 'styles/constants'

import { children } from '../../helpers/prop-types'
import { SubHeading } from '../heading'

const IMG_WIDTH = '280px'
const IMG_HEIGHT = '200px'

const Root = styled.div`
  display: flex;
  margin: 0 17%;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 10%;
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  p {
    margin-top: ${rem('12px')};
    text-align: left;
  }

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    p {
      text-align: left;
    }
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    align-items: center;

    p {
      text-align: center;
    }
  }
`
const SlideMediaContainer = styled(MediaContainer)`
  min-width: ${IMG_WIDTH};
  max-width: ${IMG_WIDTH};
  min-height: ${IMG_HEIGHT};
  max-height: ${IMG_HEIGHT};
`

const SlideHeading = styled(SubHeading)`
  text-align: center;
  margin-top: ${rem(16)};

  && {
    font-size: ${rem(24)};
  }

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    text-align: left;
  }
`

const SlideSubHeading = styled(SubHeading)`
  && {
    font-size: ${rem(16)};
    line-height: 1.6;
    color: #657594;
    margin-top: ${rem(12)};
  }
`

const SlideText = styled(SubHeading)`
  && {
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.5;
    margin-top: ${rem(16)};
  }
`

const Slide = ({ media, heading, subHeading, text, ...props }) => (
  <Root {...props}>
    <SlideMediaContainer>{media}</SlideMediaContainer>
    <Content>
      <SlideHeading>{heading}</SlideHeading>
      <SlideSubHeading as="p">{subHeading}</SlideSubHeading>
      <SlideText>{text}</SlideText>
    </Content>
  </Root>
)

Slide.propTypes = {
  media: children,
  heading: string,
  subHeading: string,
  text: string,
}

export default Slide
