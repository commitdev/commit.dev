import React, { useEffect } from 'react'

import Link from 'next/link'
import PrettyScatter from 'pretty-scatter'
import styled from 'styled-components'

import { Text } from 'components'
import { FlexSectionContent } from 'components/layout'
import {
  TABLET_LARGE_SIZE,
  TABLET_SMALL_SIZE,
  MOBILE_SIZE,
} from 'styles/constants'

import { SectionHeadingBold } from '../../components/heading'
import TeamAvatar from './team-avatar'

const StyledSection = styled.section`
  padding: 124px 0 100px;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: 124px 0;
  }
`

const TextContent = styled.div`
  max-width: 770px;
  padding: 40px 70px 70px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: 0 70px 70px;
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    max-width: 430px;
    padding: 0 16px 40px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    max-width: 342px;
    padding: 0 16px 40px;
  }
`

const StyledText = styled(Text)`
  margin: 24px 0;
  text-align: center;
`

const PinkLink = styled.a`
  color: #ff86c6;
`

const AvatarList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 120px 0;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 10%;
  }

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    margin: -50px 8% 0;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0 auto;
    padding: 0 10px 0;
  }
`

const people = [
  { name: 'Jason', src: 'team/jason.jpeg' },
  { name: 'Adrian', src: 'team/adrian.jpeg' },
  { name: 'Djordje', src: 'team/djordje.jpeg' },
  { name: 'Jayd', src: 'team/jayd.jpeg' },
  { name: 'Tim R', src: 'team/timr.jpeg' },
  { name: 'Andrew', src: 'team/andrew.jpeg' },
  { name: 'Alex', src: 'team/alex.jpeg' },
  { name: 'Chris', src: 'team/chris.jpeg' },
  { name: 'Alessandro', src: 'team/alessandro.jpeg' },
  { name: 'Robyn', src: 'team/robyn.jpeg' },
]

const OpensourceSection = () => {
  useEffect(() => {
    PrettyScatter.init(
      document.getElementsByClassName('pretty-scatter')[0],
      900,
    )
  }, [])

  return (
    <StyledSection>
      <FlexSectionContent>
        <TextContent>
          <SectionHeadingBold>Commit.dev as Opensource</SectionHeadingBold>
          <StyledText>
            Our commit.dev website runs as an opensource project within Commit
            where engineers are free to work on the website as they wish and
            drop off if they are busy working with startup opportunities. These
            are the faces behind the creation of the website.
          </StyledText>
          <StyledText>
            Feel free to checkout commit.dev’s github&nbsp;
            <Link href="https://github.com/commitdev" passHref>
              <PinkLink>Here</PinkLink>
            </Link>
          </StyledText>
        </TextContent>
        <AvatarList className="pretty-scatter">
          {people.map((person) => (
            <TeamAvatar {...person} key={person.name} />
          ))}
        </AvatarList>
      </FlexSectionContent>
    </StyledSection>
  )
}

export default OpensourceSection
