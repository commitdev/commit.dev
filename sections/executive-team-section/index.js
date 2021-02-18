import React, { useState } from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading } from 'components'
import { FlexSectionContents } from 'components/layout'
import { useIsCompactScreen } from 'helpers/hooks'
import ChevronSvg from 'public/chevron.svg'
import { DESKTOP_SIZE, MOBILE_SIZE } from 'styles/constants'

import ExecutiveAvatar from './executive-avatar'

const { h2 } = Heading.VARIANT

const StyledSection = styled.section`
  padding: 80px 0;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 64px 0px;
  }
`

const StyledHeading = styled((props) => <Heading {...props} />)`
  text-align: center;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-bottom: 2.625rem;
  }
`

const AvatarList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 120px;
  padding-top: 24px;

  @media only screen and (max-width: ${DESKTOP_SIZE}) {
    margin: 0 10%;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0;
  }
`

const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${rem('24px')};
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
  const isCompactScreen = useIsCompactScreen()
  const [showAllPeople, setShowAllPeople] = useState(false)

  const peopleToShow =
    isCompactScreen && showAllPeople ? people.slice(0, 2) : people

  return (
    <StyledSection>
      <FlexSectionContents>
        <StyledHeading variant={h2}>Our Executive Team</StyledHeading>
        <AvatarList>
          {peopleToShow.map((person) => (
            <ExecutiveAvatar {...person} key={person.name} />
          ))}
        </AvatarList>
        {isCompactScreen && (
          <LinkButtonContainer>
            <LinkButton
              onClick={() => setShowAllPeople(!showAllPeople)}
              type="button"
            >
              <LinkButtonTextContainer>
                {showAllPeople ? 'Whole Team' : 'Collapse'}
              </LinkButtonTextContainer>
              {showAllPeople ? <ChevronSvg /> : <InvertedChevronSvg />}
            </LinkButton>
          </LinkButtonContainer>
        )}
      </FlexSectionContents>
    </StyledSection>
  )
}

export default ExecutiveTeamSection
