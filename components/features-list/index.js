import { rem } from 'polished'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import { TABLET_LARGE_SIZE, TABLET_SMALL_SIZE } from 'styles/constants'

import { children } from '../../helpers/prop-types'
import { fontSmoothingAntialiased } from '../../styles/font-smoothing'

const Media = styled.div`
  display: block;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: ${rem(48)};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    flex: 0 0 51%;
    max-width: 51%;
  }
`

const MEDIA_MARGIN_TABLET_SMALL = rem('-76px')
const MEDIA_MARGIN_TABLET_LARGE = rem('-43px')

const MediaInner = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 1rem;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-left: ${MEDIA_MARGIN_TABLET_SMALL};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    margin-left: ${MEDIA_MARGIN_TABLET_LARGE};
  }
`

const Content = styled.div`
  display: block;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  ${fontSmoothingAntialiased}

  h2,
  h3 {
    color: #fff;
    font-weight: 800;
    font-size: ${rem('24px')};
    line-height: 1.2;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  p {
    color: #8493b0;
    font-weight: 600;
    font-size: ${rem('18px')};
    line-height: 1.5;
  }

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: left;

    p {
      text-align: left;
    }
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    flex: 0 0 49%;
    max-width: 49%;
  }
`

const ContentInner = styled.div`
  display: block;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    padding: 0 ${rem(48)};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    padding: 0 ${rem(110)};
  }
`

const Item = styled.div`
  margin-bottom: ${rem('72px')};

  :last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    :nth-child(2n) {
      flex-direction: row-reverse;

      ${MediaInner} {
        margin-left: 0;
        margin-right: ${MEDIA_MARGIN_TABLET_SMALL};
      }
    }
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    :nth-child(2n) {
      ${MediaInner} {
        margin-left: 0;
        margin-right: ${MEDIA_MARGIN_TABLET_LARGE};
      }
    }
  }
`

const Container = styled.div`
  display: block;
  max-width: ${rem('1440px')};
  margin: 0 auto;
  padding: 0 ${rem(36)};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  display: block;
  overflow-x: hidden;
`

const featuresListItemType = {
  media: children.isRequired,
  children: children.isRequired,
}

function FeaturesListItem({ media, children, ...otherProps }) {
  return (
    <Item {...otherProps}>
      <Media>
        <MediaInner>{media}</MediaInner>
      </Media>
      <Content>
        <ContentInner>{children}</ContentInner>
      </Content>
    </Item>
  )
}

FeaturesListItem.propTypes = {
  ...featuresListItemType,
}

function FeaturesList({ features = [], children }) {
  return (
    <Wrapper>
      <Container>
        {features.map(({ id, ...otherFeatureProps }) => (
          <FeaturesListItem key={id} {...otherFeatureProps} />
        ))}
        {children}
      </Container>
    </Wrapper>
  )
}

FeaturesList.propTypes = {
  features: arrayOf(shape({ id: string.isRequired, ...featuresListItemType })),
  children,
}

export { FeaturesListItem }

export default FeaturesList
