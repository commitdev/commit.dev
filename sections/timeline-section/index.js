import React from 'react'

import styled from 'styled-components'

import { TABLET_LARGE_SIZE } from 'styles/constants'

const timelineColour = '#8493B0'

const List = styled.ol`
  list-style-type: none;
  max-width: 37rem;
  margin: 0 2rem;
`

const Item = styled.li`
  position: relative;
  margin: 0;
  padding: 0;

  &:before {
    content: '';
    background-color: ${timelineColour};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.7rem;
    width: 2px;
  }

  &:first-child:before {
    top: 50%;
  }

  &:last-child:before {
    bottom: 50%;
  }

  &:after {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%238493b0' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
    position: absolute;
    left: 0;
    top: calc(50% - 0.75rem);
    height: 1.5rem;
    width: 1.5rem;
  }

  > * {
    display: flex;
    align-items: center;
    padding: 2rem 0;
  }
`
const Date = styled.span`
  min-width: 12rem;
  margin: 0;
  padding: 0 2.5rem 0 3rem;
  color: ${timelineColour};
  font-family: Montserrat;
  font-weight: 800;
  font-size: 2.25rem;
  text-align: left;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    min-width: 7rem;
    padding: 0 1rem 0 2rem;
    font-size: 1.5rem;
  }
`

const Label = styled.span`
  margin: 0;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    font-size: 1.25rem;
    line-height: 1.6rem;
  }
`

const BoldPink = styled.span`
  font-weight: 700;
  color: #ff6ab9;
`

const TimelineSection = () => (
  <List>
    <Item>
      <div>
        <Date>2019</Date>
        <Label>Founded by Software Engineers</Label>
      </div>
    </Item>
    <Item>
      <div>
        <Date>2020</Date>
        <Label>
          We grew <BoldPink>370%</BoldPink>
        </Label>
      </div>
    </Item>
    <Item>
      <div>
        <Date>2021</Date>
        <Label>
          We aim to hire <BoldPink>500 Engineers</BoldPink> with an emphasis on{' '}
          <BoldPink>diversity</BoldPink>
        </Label>
      </div>
    </Item>
  </List>
)

export default TimelineSection
