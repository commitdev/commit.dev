import React from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading, Text } from 'components'
import { useIsMaxScreenSize } from 'helpers/hooks'
import { TABLET_LARGE_SIZE } from 'styles/constants'

const IMAGE_BREAKPOINT = '839px'

const { h2 } = Heading.VARIANT

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 534px;
  @media only screen and (max-width: ${IMAGE_BREAKPOINT}) {
    flex-direction: column-reverse;
    height: auto;
  }
`

const ImageContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  @media only screen and (max-width: ${IMAGE_BREAKPOINT}) {
    width: 100%;
  }
`

const Image = styled.img`
  max-width: 100%;
  @media only screen and (max-width: ${IMAGE_BREAKPOINT}) {
    width: 100%;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${rem('101px')} ${rem('80px')} ${rem('101px')} ${rem('70px')};
  background: linear-gradient(61.68deg, #ff68ba 2.29%, #edc281 100.63%);

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    align-items: center;
    padding: ${rem('48px')} ${rem('24px')};
  }

  @media only screen and (max-width: ${IMAGE_BREAKPOINT}) {
    align-items: center;
    padding: ${rem('84px')} ${rem('36px')};
    width: 100%;
  }
`

const StyledHeading = styled(Heading)``

const DiversityAndInclusionSection = () => {
  const isCompactScreen = useIsMaxScreenSize(IMAGE_BREAKPOINT)

  return (
    <section>
      <Container>
        <ImageContainer>
          <Image
            src={
              isCompactScreen
                ? '/sharon-mccutcheon-multi-coloured-hand-paint-wide.jpeg'
                : '/sharon-mccutcheon-multi-coloured-hand-paint-tall.jpeg'
            }
            alt="Hand with multi-colored paint on it."
          />
        </ImageContainer>
        <TextContainer>
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
        </TextContainer>
      </Container>
    </section>
  )
}

export default DiversityAndInclusionSection
