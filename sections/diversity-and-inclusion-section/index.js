import React from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading, MediaContainer, StaticImage, Text } from 'components'
import { MOBILE_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

const { h2 } = Heading.VARIANT

const Container = styled.div`
  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`

const ImageContainer = styled(MediaContainer)`
  height: 0;
  padding-bottom: 100%;

  @media only screen and (min-width: ${MOBILE_SIZE}) {
    padding-bottom: 70%;
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    grid-row-start: 1;
    height: auto;
    min-height: ${rem('534px')};
    padding-bottom: 0;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${rem('84px')} ${rem('36px')};
  background: linear-gradient(61.68deg, #ff68ba 2.29%, #edc281 100.63%);
`

const TextWrapper = styled.div`
  max-width: 575px;
  margin: 0 auto;
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: ${rem('32px')};

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    margin-bottom: ${rem('26px')};
  }
`

const StyledText = styled(Text)`
  text-align: center;
`

const DiversityAndInclusionSection = () => (
  <section>
    <Container>
      <TextContainer>
        <TextWrapper>
          <StyledHeading variant={h2}>Diversity &amp; Inclusion</StyledHeading>
          <StyledText>
            It’s incredibly important to everyone at Commit that the community
            is an inclusive and equitable workplace. We are remote-first,
            meaning that we don’t have an office and many of the engineers work
            on an asynchronous time schedule, which facilitates parents or
            people who need to tackle various priorities in life.
          </StyledText>
          <StyledText>
            While we are small, and at the very beginning of this journey to
            have a diverse workforce that is truly representative of our
            society, we aim to break the mold for tech companies and shed
            typical stereotypes and biases.
          </StyledText>
        </TextWrapper>
      </TextContainer>
      <ImageContainer>
        <StaticImage name="painted-hand.jpg" alt="Painted hand" />
      </ImageContainer>
    </Container>
  </section>
)

export default DiversityAndInclusionSection
