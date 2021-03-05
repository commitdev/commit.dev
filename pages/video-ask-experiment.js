import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { SiteHeader } from 'components'
import { ContentRoot } from 'components/layout'
import { MOBILE_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background: #000000;
  background: linear-gradient(248.66deg, #010242 0%, #0f1011 100%);
  overflow: hidden;
  flex-grow: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0 5rem;
  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 3rem;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0 1rem;
  }
`

const VideoAskExperiment = () => {
  const [isVideoaskSubmitted, setVideoaskSubmitted] = useState(false)

  useEffect(() => {
    if (process.browser) {
      const isVideoaskMessage = (message) =>
        message.origin === 'https://www.videoask.com' &&
        message.data &&
        message.data.type &&
        message.data.type.startsWith('videoask_')

      window.addEventListener('message', (message) => {
        if (!isVideoaskMessage(message)) {
          return
        }

        console.log('got videoask message', message.data)

        const { type } = message.data
        if (type === 'videoask_submitted') {
          setVideoaskSubmitted(true)
        }
      })
    }
  }, [])
  return (
    <ContentRoot>
      <HeroSection>
        <SiteHeader />
        <Content>
          {!isVideoaskSubmitted && (
            <iframe
              title="Videoask form"
              src="https://www.videoask.com/fygcqej3f"
              allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
              width="100%"
              height="600px"
            />
          )}
          {isVideoaskSubmitted && <span>Videoask Submitted! 🎉🎉🎉</span>}
        </Content>
      </HeroSection>
    </ContentRoot>
  )
}

export default VideoAskExperiment
