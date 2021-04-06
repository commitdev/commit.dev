import React from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading, Text } from 'components'
import { TABLET_LARGE_SIZE } from 'styles/constants'

// for reference: image assets and sizes:
// filename width X height
// painted-hand-mobile.png 414px x 400px
// painted-hand-tablet.png 500px x 534px
// painted-hand-desktop.png 709px x 534px

const TABLET_IMAGE_BREAKPOINT = '828px' // width of painted-hand-mobile.png times two
const DESKTOP_IMAGE_BREAKPOINT = '1442px' // width of painted-hand-desktop.png times two plus 24px padding
const HEIGHT = '534px'

const { h2 } = Heading.VARIANT

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: ${HEIGHT};
  overflow-y: hidden;

  @media only screen and (max-width: ${TABLET_IMAGE_BREAKPOINT}) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    height: 100%;
  }  
`

const Picture = styled.picture`
img {
  width: 100%;
  height: auto;
 }

@media only screen and (min-width: ${TABLET_IMAGE_BREAKPOINT}) and (max-width: ${TABLET_LARGE_SIZE}) {
 img {
   width: auto;
   height: 100%;
 } 
} 

@media only screen and (max-width: ${TABLET_IMAGE_BREAKPOINT}) {
 grid-row-start: 2;
 img {
   height: 100%;
   width: 100%;  
 }
}
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;

  width: 100%;
  height: ${HEIGHT};

  padding: ${rem('101px')} ${rem('80px')} ${rem('101px')} ${rem('70px')};
  background: linear-gradient(61.68deg, #ff68ba 2.29%, #edc281 100.63%);
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: ${rem('48px')} ${rem('24px')};
  }
  
  @media only screen and (max-width: ${TABLET_IMAGE_BREAKPOINT}) {
    grid-row-start: 1;
    height: 100%;
    padding: ${rem('84px')} ${rem('36px')};
  }
`

const TextWrapper = styled.div`
  max-width: 575px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    max-width: 500px;
  }  
  
  p {
    text-align: center;
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: ${rem('26px')};
  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin-bottom: ${rem('32px')};
  }
  @media only screen and (max-width: ${TABLET_IMAGE_BREAKPOINT}) {
    margin-bottom: ${rem('26px')};
  }
`

const TabletImage = styled.source.attrs(props => ({
  media: `(min-width: ${TABLET_IMAGE_BREAKPOINT}) and (max-width:${DESKTOP_IMAGE_BREAKPOINT})`,
  srcSet: "/painted-hand-tablet.png"
}))``

const DesktopImage = styled.source.attrs(props => ({
  media: `(min-width:${DESKTOP_IMAGE_BREAKPOINT})`,
  srcSet: "/painted-hand-desktop.png"
}))``

const MobileImage = styled.img.attrs(props => ({
  src: "/painted-hand-mobile.png",
  alt: "Inclusive community"  
}))``

const DiversityAndInclusionSection = () => (
  <section>
    <Container>
      <Picture>
        <TabletImage />
        <DesktopImage />
        <MobileImage />
      </Picture>
      <TextContainer>
        <TextWrapper>
          <StyledHeading variant={h2}>Diversity & Inclusion</StyledHeading>
          <Text>
            It’s incredibly important to everyone at Commit that the community
            is an inclusive and equitable workplace. We are remote-first,
            meaning that we don’t have an office and many of the engineers work
            on an asynchronous time schedule, which facilitates parents or
            people who need to tackle various priorities in life.
          </Text>
          <Text>
            While we are small, and at the very beginning of this journey to
            have a diverse workforce that is truly representative of our
            society, we aim to break the mold for tech companies and shed
            typical stereotypes and biases.
          </Text>
        </TextWrapper>
      </TextContainer>
    </Container>
  </section>
)

export default DiversityAndInclusionSection
