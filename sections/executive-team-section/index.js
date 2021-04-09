import React, { useState } from 'react'

import { rem } from 'polished'
import styled from 'styled-components'

import { Heading } from 'components'
import { useIsMaxScreenSize } from 'helpers/hooks'
import { TABLET_LARGE_SIZE, TABLET_SMALL_SIZE } from 'styles/constants'

import ChevronSvg from '../../static/icons/chevron.svg'
import ExecutiveAvatar from './executive-avatar'
import { people } from './people'

const { h2 } = Heading.VARIANT

const StyledSection = styled.section`
  padding: ${rem('100px')} 0;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    padding: ${rem('124px')} 0;
  }
`

const StyledHeading = styled((props) => <Heading {...props} />)`
  text-align: center;
  margin-bottom: ${rem('42px')};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-bottom: ${rem('108px')};
  }
`

const AvatarList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem('1240px')};
  padding: 0 ${rem('35px')};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    padding: 0 ${rem('40px')};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    padding: 0 ${rem('60px')};
  }
`

const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-top: ${rem('24px')};
  margin-bottom: ${rem('65px')};
  max-width: 50%;
  flex: 0 0 50%;
`

const LinkButton = styled.button`
  color: #ff6ab9;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
`

const InvertedChevronSvg = styled(ChevronSvg)`
  transform: scale(1, -1);
  transform-origin: center;
`

const LinkButtonTextContainer = styled.span`
  padding-right: ${rem('4px')};
`

const ExecutiveTeamSection = () => {
  const isCompactScreen = useIsMaxScreenSize(TABLET_SMALL_SIZE)
  const [showAllPeople, setShowAllPeople] = useState(false)

  let peopleToShow = people
  if (isCompactScreen) {
    peopleToShow = showAllPeople ? people : people.slice(0, 2)
  }

  return (
    <StyledSection>
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
    </StyledSection>
  )
}

export default ExecutiveTeamSection
