import styles from 'styles/Home.module.css'
import {Header} from 'components'

export default function Home() {
  const Paragraph = ({children, title}) => (
    <>
      <h1>{title}</h1>
      <p>{children}</p>
    </>
  )

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='/images/commit-logo-white.svg' alt='Commit Logo'/>
      </div>

      <Header>Take control of your career</Header>

      <Paragraph {...{title: 'Connect'}}>
        Build meaningful relationships in a distributed community of Software Engineers
      </Paragraph>
      <Paragraph {...{title: 'Explore'}}>
        Get matched with challenging projects at exciting Silicon Valley
        startups and build impactful products
      </Paragraph>
      <Paragraph {...{title: 'Elevate'}}>
        Refine or expand your expertise through hands-on projects,
        peer-to-peer coaching and professional development opportunities
      </Paragraph>
    </div>
  )
}