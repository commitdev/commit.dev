import React, { useState } from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading } from 'components'
import { FlexSectionContent } from 'components/layout'
import { useIsMaxScreenSize } from 'helpers/hooks'
import ChevronSvg from 'public/chevron.svg'
import {
  TABLET_LARGE_SIZE,
  MOBILE_SIZE,
  TABLET_SMALL_SIZE,
} from 'styles/constants'

import ExecutiveAvatar from './executive-avatar'

const { h2 } = Heading.VARIANT

const StyledSection = styled.section`
  padding: ${rem('164px')} 0;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: ${rem('124px')} 0;
  }
`

const StyledHeading = styled((props) => <Heading {...props} />)`
  text-align: center;
`

const AvatarList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 120px;
  padding-top: ${rem('108px')};

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin: 0 10%;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding-top: ${rem('42px')};
    margin: 0;
  }
`

const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-top: ${rem('24px')};
  margin-bottom: ${rem('32px')};
`

const LinkButton = styled.button`
  color: #8493b0;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background: none;
`

const InvertedChevronSvg = styled(ChevronSvg)`
  transform: scale(1, -1);
  transform-origin: center;
`

const LinkButtonTextContainer = styled.span`
  padding-right: ${rem('4px')};
`

const people = [
  { name: 'Greg Gunn', postion: 'Co-Founder', src: '/greg.jpeg' },
  {
    name: 'Beier Cai',
    postion: 'Co-Founder',
    src: '/beier.jpeg',
  },
  { name: 'Noel Pullen', postion: 'CXO', src: '/noel.jpeg' },
  { name: 'Cong Ly', postion: 'VP Growth', src: '/cong.jpeg' },
  {
    name: 'Ashley Brookes',
    postion: 'VP Marketing',
    src: '/ashley.jpeg',
  },
  {
    name: 'Tiffany Jung',
    postion: 'VP Strategy & OPS',
    src: '/tiffany.jpeg',
  },
  {
    name: 'Sarah Marion',
    postion: 'Founder Partnerships',
    src: '/sarah.jpeg',
  },
  {
    name: 'Bill Monkman',
    postion: 'Chief Architect',
    src: '/bill.jpeg',
  },
  {
    name: 'Steven Shi',
    postion: 'Staff Devops Engineer',
    src: '/steven.jpeg',
  },
  {
    name: 'Phong Thieu',
    postion: 'Engineering Manager',
    src: '/phong.jpeg',
  },
  {
    name: 'Renee Tung',
    postion: 'Finance',
    src: '/renee.jpeg',
  },
]

const ExecutiveTeamSection = () => {
  const isCompactScreen = useIsMaxScreenSize(TABLET_SMALL_SIZE)
  const [showAllPeople, setShowAllPeople] = useState(false)

  let peopleToShow = people
  if (isCompactScreen) {
    peopleToShow = showAllPeople ? people : people.slice(0, 2)
  }

  return (
    <StyledSection>
      <FlexSectionContent>
        <StyledHeading variant={h2}>Our Executive Team</StyledHeading>
        <AvatarList>
          {peopleToShow.map((person) => (
            <ExecutiveAvatar {...person} key={person.name} />
          ))}
          {isCompactScreen && (
            <LinkButtonContainer>
              <LinkButton
                onClick={() => setShowAllPeople(!showAllPeople)}
                type="button"
              >
                <LinkButtonTextContainer>
                  {showAllPeople ? 'Collapse' : 'Whole Team'}
                </LinkButtonTextContainer>
                {showAllPeople ? <InvertedChevronSvg /> : <ChevronSvg />}
              </LinkButton>
            </LinkButtonContainer>
          )}
        </AvatarList>
      </FlexSectionContent>
    </StyledSection>
  )
}

export default ExecutiveTeamSection
