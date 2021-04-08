import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Heading, Text, MediaContainer } from 'components'
import {
  TABLET_SMALL_SIZE,
  TABLET_LARGE_SIZE,
  MOBILE_SIZE,
} from 'styles/constants'

import { children } from '../../helpers/prop-types'

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

  h3 {
    font-size: ${rem('24px')};
    line-height: ${rem('24px')};
    font-weight: 700;
    margin-bottom: 0;

    strong {
      display: block;
      font-weight: 700;
      font-size: ${rem('16px')};
      line-height: ${rem('26px')};
      color: #657594;
      margin-top: ${rem('12px')};
    }
  }

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

    h3 {
      text-align: center;
      margin-top: ${rem('16px')};
    }

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

const Slide = ({ media, heading, subHeading, text, ...props }) => (
  <Root {...props}>
    <SlideMediaContainer>{media}</SlideMediaContainer>
    <Content>
      <Heading variant={Heading.VARIANT.h3}>
        {heading}
        <strong>{subHeading}</strong>
      </Heading>
      <Text>{text}</Text>
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
