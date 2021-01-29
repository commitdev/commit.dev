import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Heading, Text } from 'components'

const IMG_WIDTH = '280px'
const IMG_HEIGHT = '200px'

const Root = styled.div`
  display: flex;
  margin: 0 17%;

  @media only screen and (max-width: 1023px) {
    margin: 0 10%;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 413px) {
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

  @media only screen and (max-width: 1023px) {
    p {
      text-align: left;
    }
  }

  @media only screen and (max-width: 767px) {
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

const Img = styled.img`
  min-width: ${IMG_WIDTH};
  max-width: ${IMG_WIDTH};
  min-height: ${IMG_HEIGHT};
  max-height: ${IMG_HEIGHT};
  object-fit: cover;
`

const Slide = ({ imgSrc, imgAlt, heading, subHeading, text, ...props }) => (
  <Root {...props}>
    <Img src={imgSrc} alt={imgAlt} />
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
  imgSrc: string,
  imgAlt: string,
  heading: string,
  subHeading: string,
  text: string,
}

export default Slide
