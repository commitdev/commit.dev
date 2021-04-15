import React from 'react'

import styled from 'styled-components'

import { FlexSectionContent } from 'components/layout'
import AiMlVcSearchEngine from 'public/ai-ml-vc-search-engine.svg'
import BurndownChart from 'public/burndown-chart.svg'
import HealthcareSecurity from 'public/healthcare-security.svg'
import NegativeEmissions from 'public/negative-emissions.svg'
import TopShot from 'public/top-shot.svg'
import { TABLET_SMALL_SIZE, TABLET_LARGE_SIZE } from 'styles/constants'

import { SectionHeading } from '../../components/heading'
import SectionHeadingContainer from '../../components/section-heading-container'

const StyledSection = styled.section`
  padding: 7.5rem 1.25rem 8.75rem;
  background: #e8edf4;
`

const StyledFlexSectionContent = styled(FlexSectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Projects = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  list-style-type: none;

  @media only screen and (min-width: ${TABLET_SMALL_SIZE}) {
    margin-top: 5.75rem;
  }
`

const Project = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 11rem;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin-top: 3rem;
  }
`

const ProjectName = styled.span`
  font-family: 'Lato';
  font-weight: 600;
  line-height: 1.25rem;
  margin-top: 2rem;

  @media only screen and (max-width: ${TABLET_LARGE_SIZE}) {
    margin-top: 0;
  }
`

const EngineersWhoJoinedSection = () => (
  <StyledSection>
    <StyledFlexSectionContent>
      <SectionHeadingContainer>
        <SectionHeading>
          Startup Engineers who joined Commit have built:
        </SectionHeading>
      </SectionHeadingContainer>
      <Projects>
        <Project>
          <TopShot title="Top Shot logo" />
          <ProjectName>The red hot NFT for the NBA TopShot</ProjectName>
        </Project>
        <Project>
          <BurndownChart title="Zenhub Burndown chart logo" />
          <ProjectName>The Burndown chart at ZenHub</ProjectName>
        </Project>
        <Project>
          <NegativeEmissions title="Negative Emissions platform logo" />
          <ProjectName>The Platform for Negative Emissions</ProjectName>
        </Project>
        <Project>
          <HealthcareSecurity title="Security Infrastructure for Healthcare logo" />
          <ProjectName>
            The Security Infrastructure for Healthcare system
          </ProjectName>
        </Project>
        <Project>
          <AiMlVcSearchEngine title="AI/ML search engine for Venture Capitals logo" />
          <ProjectName>
            The AI/ML based startup research engine for Venture Capitals
          </ProjectName>
        </Project>
      </Projects>
    </StyledFlexSectionContent>
  </StyledSection>
)

export default EngineersWhoJoinedSection
