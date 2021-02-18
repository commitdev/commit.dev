import React from 'react'

import styled from 'styled-components'

import { Heading, Text } from 'components'
import { FlexSectionContents } from 'components/layout'
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

const ExecutiveTeamSection = () => (
  <StyledSection>
    <FlexSectionContents>
      <StyledHeading variant={h2}>Our Executive Team</StyledHeading>
      <AvatarList>
        <ExecutiveAvatar
          name="Greg Gunn"
          postion="Co-Founder"
          src="/greg.jpeg"
        />
        <ExecutiveAvatar
          name="Beier Cai"
          postion="Co-Founder"
          src="/beier.jpeg"
        />
        <ExecutiveAvatar name="Noel Pullen" postion="CXO" src="/noel.jpeg" />
        <ExecutiveAvatar name="Cong Ly" postion="VP Growth" src="/cong.jpeg" />
        <ExecutiveAvatar
          name="Ashley Brookes"
          postion="VP Marketing"
          src="/ashley.jpeg"
        />
        <ExecutiveAvatar
          name="Tiffany Jung"
          postion="VP Strategy & OPS"
          src="/tiffany.jpeg"
        />
        <ExecutiveAvatar
          name="Sarah Marion"
          postion="Founder Partnerships"
          src="/sarah.jpeg"
        />
        <ExecutiveAvatar
          name="Bill Monkman"
          postion="Chief Architect"
          src="/bill.jpeg"
        />
        <ExecutiveAvatar
          name="Steven Shi"
          postion="Staff Devops Engineer"
          src="/steven.jpeg"
        />
        <ExecutiveAvatar
          name="Phong Thieu"
          postion="Engineering Manager"
          src="/phong.jpeg"
        />
        <ExecutiveAvatar
          name="Renee Tung"
          postion="Finance"
          src="/renee.jpeg"
        />
      </AvatarList>
    </FlexSectionContents>
  </StyledSection>
)

export default ExecutiveTeamSection
