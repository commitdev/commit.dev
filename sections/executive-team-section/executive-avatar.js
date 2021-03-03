import React from 'react'

import { rem } from 'polished'
import { string } from 'prop-types'
import styled from 'styled-components'

import { TABLET_SMALL_SIZE } from 'styles/constants'

const WIDTH = rem('160px')

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: ${rem('32px')};

  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    padding: ${rem('32px')} ${rem('10px')};
  }
`

const Avatar = styled.img`
  border-radius: 100%;
  width: ${WIDTH};
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
  max-width: ${WIDTH};
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
