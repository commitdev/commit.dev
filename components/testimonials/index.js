import { useEffect } from 'react'

import Glide from '@glidejs/glide'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { rem } from 'polished'
import styled from 'styled-components'

import { StaticImage } from 'components'
import { MOBILE_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

import Slide from './slide'

import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

const DOT_SIZE = rem('18px')
const DOT_SIZE_MOBILE = rem('24px')
const CARET_SIZE = rem('50px')

const Root = styled.div`
  margin-top: ${rem('42px')};
  cursor: default;
  max-width: 1240px;

  @media only screen and (min-width: ${MOBILE_SIZE}) {
    margin-top: ${rem('64px')};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    margin-top: ${rem('84px')};
  }
`

const Track = styled.div`
  margin-bottom: ${rem('64px')};
  position: relative;
  cursor: grab;

  .glide__slide {
    height: 100%;
  }
`

const ControlDots = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`

const ArrowButtons = styled.div``

const ArrowButton = styled.button`
  background: transparent;
  border: 0;
  color: rgba(255, 104, 186, 0.5);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.glide__bullet--active {
    background: transparent;
  }

  &:hover {
    color: rgba(255, 104, 186, 1);
  }

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    display: none;
  }
`

const LeftArrowButton = styled(ArrowButton)`
  position: absolute;
  top: 81.5px;
`

const RightArrowButton = styled(ArrowButton)`
  position: absolute;
  right: 0;
  top: 81.5px;
`

const DotButton = styled.button`
  height: ${DOT_SIZE};
  width: ${DOT_SIZE};
  border-radius: 50%;
  background: rgba(255, 104, 186, 0.5);
  margin: 0.5rem;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &.glide__bullet--active {
    background: rgba(255, 104, 186, 1);
  }

  &:focus {
    outline: none;
    transform: scale(1.25);
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    height: ${DOT_SIZE_MOBILE};
    width: ${DOT_SIZE_MOBILE};
  }
`

const Testimonials = () => {
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1,
    }).mount()
  }, [])

  return (
    <Root className="glide">
      <Track className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <Slide
              media={
                <StaticImage
                  name="testimonials/testimonial-1.jpg"
                  alt="Clara Tsang"
                />
              }
              heading="Clara Tsang"
              subHeading="Commit Engineering Partner"
              text="Commit offers me a flexible working situation where I get to work on a wide spread of projects to build my career. It’s an amazing opportunity to learn from such a great community of engineers and choose from projects and technologies that actually interest me and can lead to exciting long term opportunities."
            />
          </li>
          <li className="glide__slide">
            <Slide
              media={
                <StaticImage
                  name="testimonials/testimonial-2.jpg"
                  alt="Bill Monkman"
                />
              }
              heading="Bill Monkman"
              subHeading="Commit Engineering Partner"
              text="I joined Commit to work with inspiring engineers and to help my renew my focus on what I'm most interested in working on."
            />
          </li>
          <li className="glide__slide">
            <Slide
              media={
                <StaticImage
                  name="testimonials/testimonial-3.jpg"
                  alt="Sim Brar"
                />
              }
              heading="Sim Brar"
              subHeading="Commit Engineering Partner"
              text="Commit is the perfect place to make a career transition. I can try new startups without the time suck of interviews or blotches on my resume. I also avoid the financial risks and admin of going on my own as a freelancer"
            />
          </li>
        </ul>
      </Track>
      <ArrowButtons data-glide-el="controls[nav]">
        <LeftArrowButton aria-label="Previous" data-glide-dir="<">
          <CaretLeft size={CARET_SIZE} />
        </LeftArrowButton>
        <RightArrowButton aria-label="Next" data-glide-dir=">">
          <CaretRight size={CARET_SIZE} />
        </RightArrowButton>
      </ArrowButtons>
      <ControlDots data-glide-el="controls[nav]">
        <DotButton
          type="button"
          aria-label="Testimonial 1"
          data-glide-dir="=0"
        />
        <DotButton
          type="button"
          aria-label="Testimonial 2"
          data-glide-dir="=1"
        />
        <DotButton
          type="button"
          aria-label="Testimonial 3"
          data-glide-dir="=2"
        />
      </ControlDots>
    </Root>
  )
}

export default Testimonials
