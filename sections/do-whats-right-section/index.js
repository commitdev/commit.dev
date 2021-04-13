import { useState, useEffect } from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading, Text } from 'components'
import {
  TABLET_SMALL_ONLY,
  TABLET_LARGE_ONLY,
  DESKTOP_ONLY,
  TABLET_AND_DESKTOP,
  COLORS,
} from 'styles/constants'

import useIsScrolledFromTop from '../../helpers/hooks/use-is-scrolled-from-top'
import styles from './WhatsRight.module.css'

const HORIZONTAL_LAYOUT_BREAK_POINT = '870px'
const HORIZONTAL_LAYOUT = `@media only screen and (min-width: ${HORIZONTAL_LAYOUT_BREAK_POINT})`

const WhatsRightContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${rem('140px')} 0 ${rem('165px')};

  ${HORIZONTAL_LAYOUT} {
    flex-direction: row;
  }

  ${TABLET_SMALL_ONLY} {
    padding: 0 ${rem('36px')};
  }

  ${TABLET_LARGE_ONLY} {
    margin-top: ${rem('370px')};
    padding: 0;
  }

  ${DESKTOP_ONLY} {
    margin-top: ${rem('388px')};
    padding: 0 ${rem('20px')};

    /* vertical pink line extending down from flashing cursor */
    :before {
      position: absolute;
      top: -471px;
      left: 423px;
      width: 2px;
      height: 0;
      background-color: ${COLORS.pink};
      content: '';
    }
  }
`

const SectionHeading = styled(Heading)`
  color: #fff;
  font-size: ${rem('48px')};
  line-height: 1.6;
  letter-spacing: 0.05em;
  text-align: left;
  text-transform: uppercase;
  max-width: ${rem('305px')};

  ${HORIZONTAL_LAYOUT} {
    margin-right: ${rem('91px')};
  }

  ${DESKTOP_ONLY} {
    margin-left: ${rem('30px')};
  }
`

const HeadingHighlight = styled.span`
  position: relative;
  display: block;
  color: ${COLORS.pink};

  ${HORIZONTAL_LAYOUT} {
    /* horizontal pink line to the right of the word "RIGHT" */
    :after {
      position: absolute;
      top: 50%;
      left: 220px;
      width: 154px;
      height: 2px;
      background-color: ${COLORS.pink};
      content: '';
    }
  }

  ${DESKTOP_ONLY} {
    :after {
      width: 0;
    }
  }
`

const Items = styled.div`
  margin-top: ${rem('85px')};

  ${HORIZONTAL_LAYOUT} {
    flex-basis: 200%;
    margin-top: ${rem('190px')};
  }
`

const Item = styled.div`
  padding-bottom: ${rem('48px')};

  ${HORIZONTAL_LAYOUT} {
    position: relative;
    padding-left: ${rem('95px')};
    padding-bottom: ${rem('72px')};

    > * {
      position: relative;
      top: -0.4em;
    }

    /* pink lines linking the 3 points */
    :before,
    :after {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: ${COLORS.pink};
      content: '';
    }

    /* horizontal pink line to left of each heading */
    :before {
      width: 50px;
      height: 2px;
    }

    /* vertical pink line to the left of each text block */
    :after {
      width: 2px;
      height: 100%;
    }

    :last-of-type:after {
      background-color: transparent;
    }
  }

  ${DESKTOP_ONLY} {
    :before {
      width: 0;
    }

    :after {
      height: 0%;
    }
  }
`

const ItemHeading = styled(Heading)`
  color: #fff;
  text-transform: uppercase;
  font-size: ${rem('28px')};
  letter-spacing: 0.1em;
  text-align: left;

  ${TABLET_AND_DESKTOP} {
    font-size: ${rem('32px')};
  }
`

const ItemText = styled(Text)`
  color: #8493b0;
  font-size: ${rem('21px')};
  line-height: 1.5;
  text-align: left;
`

const WhatsRight = () => {
  const isScrolledFromTop = useIsScrolledFromTop(0, 40, true)

  const [
    hasWaitedForTypingAnimation,
    setHasWaitedForTypingAnimation,
  ] = useState(false)

  useEffect(() => {
    const typingAnimationTimer = setTimeout(() => {
      setHasWaitedForTypingAnimation(true)
    }, 8000)
    return () => {
      clearTimeout(typingAnimationTimer)
    }
  }, [])

  return (
    <WhatsRightContent
      className={`
      ${
        isScrolledFromTop && hasWaitedForTypingAnimation
          ? styles.whatsRightAnimateOnce
          : ''
      }
    `}
    >
      <SectionHeading variant={Heading.VARIANT.h2}>
        We do what's
        <HeadingHighlight className={styles.whatsRightHeadingHighlight}>
          right
        </HeadingHighlight>
        for the engineer
      </SectionHeading>
      <Items>
        <Item className={styles.whatsRightItem}>
          <ItemHeading variant={Heading.VARIANT.h3}>Stable</ItemHeading>
          <ItemText>We hire you while you try out different startups</ItemText>
        </Item>
        <Item className={styles.whatsRightItem}>
          <ItemHeading variant={Heading.VARIANT.h3}>Streamlined</ItemHeading>
          <ItemText>Our team vets high-potential startups for you</ItemText>
        </Item>
        <Item className={styles.whatsRightItem}>
          <ItemHeading variant={Heading.VARIANT.h3}>Researched</ItemHeading>
          <ItemText>No more technical interviews</ItemText>
        </Item>
      </Items>
    </WhatsRightContent>
  )
}

export default WhatsRight
