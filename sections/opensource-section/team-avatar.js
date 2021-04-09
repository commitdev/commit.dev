import React from 'react'

import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MediaContainer, StaticImage } from 'components'
import { TABLET_SMALL_SIZE } from 'styles/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 32px 26px;

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    padding: 21px 18px;
  }
`

const Avatar = styled(MediaContainer)`
  transform: translateZ(0);
  border-radius: 100%;
  width: 80px;
  height: 80px;
`

const Name = styled.div`
  font-size: ${rem('14px')};
  font-weight: 500;
  padding-top: 10px;
  text-align: center;
`

const TeamAvatar = ({ name, src }) => (
  <Container>
    <Avatar>
      <StaticImage name={src} alt={`${name}`} />
    </Avatar>
    <Name>{name}</Name>
  </Container>
)

TeamAvatar.propTypes = {
  name: string.isRequired,
  src: string.isRequired,
}

export default TeamAvatar
