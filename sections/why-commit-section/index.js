import React from 'react'

import styled from 'styled-components'

import {
  TABLET_LARGE_SIZE,
  TABLET_SMALL_SIZE,
  MOBILE_SIZE,
} from 'styles/constants'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.5rem auto 16rem;
  padding: 0 20px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 3.5rem 0 8rem;
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    margin: 2.5rem 0 9rem;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 3rem 16px 9rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 75rem;
  font-family: Lato;

  > * {
    flex-basis: 50%;
    padding: 0 2rem;
  }

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    > * {
      padding: 0 1rem;
    }
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    flex-direction: column;

    > * {
      padding: 0;
    }

    > *:nth-child(n + 2) {
      margin-top: 3rem;
    }
  }
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const IsCommitRight = styled.p`
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.5em;
`

const ReasonsToJoin = styled.ul`
  list-style-type: none;
  font-weight: 400;
  line-height: 1.4rem;

  > * {
    margin-top: 1.1rem;
  }
`

const WhyCommitSection = () => (
  <StyledSection>
    <Container>
      <div>
        <VideoWrapper>
          <Iframe
            src="https://www.youtube.com/embed/pIbkW6wMqrw"
            title="Why joining Commit?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      </div>
      <div>
        <IsCommitRight>
          Is Commit right for you? Today, we’re hyper-focused on solving
          challenges for Senior Startup Engineers. We’re the right partner for
          you if you resonate with the following:
        </IsCommitRight>
        <ReasonsToJoin>
          <li>
            Obsessed with building impactful products that customers love to use
          </li>
          <li>Strong believer in using MVP to validate ideas</li>
          <li>
            Can build products rapidly without significant sacrifice on quality
          </li>
          <li>
            Love the autonomy and ambiguity of working at early stage startups
          </li>
          <li>
            Have a tech stack that’s suitable for joining or starting early
            technical teams{' '}
          </li>
          <li>Have a learner’s mentality and open to collaboration</li>
        </ReasonsToJoin>
      </div>
    </Container>
  </StyledSection>
)

export default WhyCommitSection
