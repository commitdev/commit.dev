import React from 'react'

import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MediaContainer, StaticImage } from 'components'
import { TABLET_LARGE_SIZE, TABLET_SMALL_SIZE } from 'styles/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  text-align: center;
  margin-bottom: ${rem('65px')};
  max-width: 50%;
  flex: 0 0 50%;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    max-width: 25%;
    flex: 0 0 25%;
    margin-bottom: ${rem('80px')};
  }

  @media only screen and (min-width: ${TABLET_LARGE_SIZE}) {
    max-width: 20%;
    flex: 0 0 20%;
    margin-bottom: ${rem('84px')};
  }
`

const AvatarContainer = styled(MediaContainer)`
  width: 100%;
  max-width: ${rem('180px')};
  padding: 0 ${rem('10px')};

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    max-width: ${rem('140px')};
    padding: 0;
  }
`

const Avatar = styled(MediaContainer)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  transform: translateZ(0);
  border-radius: 100%;
  overflow: hidden;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-top: ${rem('24px')};
`

const Position = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #657594;
  padding: ${rem('8px')} ${rem('4px')} 0;
  text-transform: capitalize;
  text-align: center;
  line-height: ${rem('18px')};
`

const ExecutiveAvatar = ({ name, postion, src }) => (
  <Container>
    <AvatarContainer>
      <Avatar>
        <StaticImage name={src} alt={`${name}: ${postion}`} />
      </Avatar>
    </AvatarContainer>
    <Name>{name}</Name>
    <Position>{postion}</Position>
  </Container>
)

ExecutiveAvatar.propTypes = {
  name: string.isRequired,
  postion: string.isRequired,
  src: string.isRequired,
}

export default ExecutiveAvatar
