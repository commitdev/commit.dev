import { rem } from 'polished'
import styled from 'styled-components'

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: ${rem('32px')};
`

// TODO: update links once pages exist
const Standard = () => (
  <>
    <Link href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      About
    </Link>
    <Link href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Blog
    </Link>
    <Link href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Startups
    </Link>
  </>
)

export default Standard
