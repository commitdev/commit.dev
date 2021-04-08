import { useState, useEffect } from 'react'

import { Heading, Text } from 'components'

import useIsScrolledFromTop from '../../helpers/hooks/use-is-scrolled-from-top'
import styles from './WhatsRight.module.css'

const { h2, h3 } = Heading.VARIANT

const WhatsRight = () => {
  const isScrolledFromTop = useIsScrolledFromTop(0, 40, true)

  const [
    hasWaitedForTypingAnimation,
    setHasWaitedForTypingAnimation,
  ] = useState(false)

  useEffect(() => {
    const typingAnimationTimer = setTimeout(() => {
      setHasWaitedForTypingAnimation(true)
    }, 10000)
    return () => {
      clearTimeout(typingAnimationTimer)
    }
  }, [])

  return (
    <section
      className={`${styles.whatsRight} ${styles.dark}
      ${
        isScrolledFromTop && hasWaitedForTypingAnimation
          ? styles.whatsRightAnimateOnce
          : ''
      }
      `}
    >
      <div className={styles.whatsRightContent}>
        <Heading variant={h2} className={styles.whatsRightHeading}>
          We do what's
          <span className={styles.whatsRightHeadingHighlight}>right</span>
          for the engineer
        </Heading>
        <div className={styles.whatsRightItems}>
          <div className={styles.whatsRightItem}>
            <Heading variant={h3} className={styles.whatsRightItemHeading}>
              Stable
            </Heading>
            <Text className={styles.whatsRightItemText}>
              We hire you while you try out different startups
            </Text>
          </div>
          <div className={styles.whatsRightItem}>
            <Heading variant={h3} className={styles.whatsRightItemHeading}>
              Streamlined
            </Heading>
            <Text className={styles.whatsRightItemText}>
              Our team vets high-potential startups for you
            </Text>
          </div>
          <div className={styles.whatsRightItem}>
            <Heading variant={h3} className={styles.whatsRightItemHeading}>
              Researched
            </Heading>
            <Text className={styles.whatsRightItemText}>
              No more technical interviews
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsRight
