import { string } from 'prop-types'
import styled from 'styled-components'
import { Heading, Text } from 'components'

const Root = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.625rem;
    margin: 1.25rem 0px;
    text-align: center;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin: 0;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 4.5rem;

    &:last-of-type {
      grid-column: 3 / span 4;
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 413px) {
    grid-column: 1 / span 1;

    &:last-of-type {
      grid-column: 1 / span 1;
    }
  }
`

const ArticlePreivew = ({ imgSrc, imgAlt, heading, text, link, ...props }) => (
  <Root {...props}>
    <a href={link} rel="noopener">
      <img alt={imgAlt} src={imgSrc} />
      <Heading variant={Heading.VARIANT.h3}>{heading}</Heading>
      <Text>{text}</Text>
    </a>
  </Root>
)

ArticlePreivew.propTypes = {
  imgSrc: string,
  imgAlt: string,
  heading: string,
  text: string,
  link: string,
}

export default ArticlePreivew
