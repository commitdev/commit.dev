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
  @media only screen and (max-width: ${IMAGE_BREAKPOINT}) {
    flex-direction: column-reverse;
    height: auto;
  }
`

const Picture = styled.picture`
  img {
    width: 100%;
    height: 100%;
  }
`

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${rem('101px')} ${rem('80px')} ${rem('101px')} ${rem('70px')};
  background: linear-gradient(61.68deg, #ff68ba 2.29%, #edc281 100.63%);
  justify-content: center;

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

const TextWrapper = styled.div`
  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    max-width: 350px;
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
  @media only screen and (max-width: ${IMAGE_BREAKPOINT}) {
    margin-bottom: ${rem('26px')};
  }
`

const DiversityAndInclusionSection = () => {
  const isCompactScreen = useIsMaxScreenSize(IMAGE_BREAKPOINT)

  return (
    <section>
      <Container>
        <Picture>
          <source
            media="(min-width:770px) and (max-width:1200px)"
            srcSet="/painted-hand-tablet.png"
          />
          <source
            media="(min-width:1201px)"
            srcSet="/painted-hand-desktop.png"
          />
          <img
            src="/painted-hand-mobile.png"
            alt="Unicorn Pool Float"
          />
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
}

export default DiversityAndInclusionSection
