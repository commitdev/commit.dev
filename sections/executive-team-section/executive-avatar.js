import React from 'react'

import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { TABLET_SMALL_SIZE } from 'styles/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${rem('32px')};

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    padding: ${rem('32px')} ${rem('10px')};
  }
`

const Avatar = styled.img`
  border-radius: 100%;
  width: ${rem('160px')};
`

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;

  padding-top: ${rem('24px')};
`

const Position = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #657594;
  padding-top: ${rem('8px')};
  text-transform: capitalize;
`

const ExecutiveAvatar = ({ name, postion, src }) => (
  <Container>
    <Avatar src={src} alt={`${name}: ${postion}`} />
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
