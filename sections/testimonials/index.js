import styled from 'styled-components'

import { SectionHeadingBold } from '../../components/heading'
import { SectionContainer } from '../../components/section-container'
import SectionHeadingContainer from '../../components/section-heading-container'
import Testimonials from '../../components/testimonials'

const Section = styled.section`
  padding: 124px 0px 98px;
`

const Container = styled(SectionContainer)`
  flex-direction: column;
  align-items: center;
`

const Heading = styled(SectionHeadingBold)`
  text-align: center;
  max-width: 51rem;
  margin: 0 auto;
`

const Carousel = styled(Testimonials)`
  margin-top: 4rem;
`

const TestimonialsSection = () => (
  <Section>
    <Container>
      <SectionHeadingContainer>
        <Heading>What Our Engineering Partners Have to&nbsp;Say</Heading>
      </SectionHeadingContainer>
      <Carousel />
    </Container>
  </Section>
)

export default TestimonialsSection
