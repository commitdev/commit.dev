import { Button, PageHeading, SectionText, SiteHeader } from 'components'
import styles from 'styles/full.module.css'

const Full = () => (
  <div className={`${styles.contentRoot}`}>
    <section className={styles.hero}>
      <SiteHeader />
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <PageHeading className={styles.heroHeading}>
            We are the community for{' '}
            <span className={styles.highlight}>remote-first</span> Software
            Engineers
          </PageHeading>
          <SectionText className={styles.heroText}>
            Commit is designing the future of work and we're putting Engineers
            at the center.
          </SectionText>
          <Button className={styles.heroButton}>Apply to Join Us</Button>
        </div>
        <div className={styles.heroSvg}>
          <svg
            width="272"
            height="639"
            viewBox="0 0 272 639"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256.047 0.0012207H272V68.2663H256.047C235.401 68.0679 215.494 75.752 200.578 89.677C185.663 103.602 176.92 122.664 176.219 142.791C176.219 148.753 176.219 155.55 176.219 162.228C176.219 211.235 176.219 274.671 134.778 319.386C176.525 364.101 176.342 427.537 176.219 476.604C176.219 483.222 176.219 489.721 176.219 496.041C176.92 516.168 185.663 535.23 200.578 549.155C215.494 563.08 235.401 570.764 256.047 570.566H272V638.771H256.047C217.039 638.924 179.521 624.17 151.53 597.67C123.538 571.17 107.3 535.031 106.294 496.995C106.294 490.317 106.294 483.461 106.294 476.426C106.294 413.407 103.421 370.54 61.4903 349.852L0 319.386L61.4903 288.98C103.421 268.232 106.477 225.365 106.294 162.406C106.294 155.371 106.294 148.456 106.294 141.838C107.285 103.791 123.516 67.637 151.509 41.124C179.502 14.6109 217.029 -0.151428 256.047 0.0012207Z"
              fill="url(#paint0_linear)"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="272"
                y1="319"
                x2="0"
                y2="319"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#68B5FF" />
                <stop offset="1" stopColor="#54FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  </div>
)

export default Full