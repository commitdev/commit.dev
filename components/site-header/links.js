import Link from 'next/link'
import { rem } from 'polished'
import styled from 'styled-components'

const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: ${rem('32px')};
  cursor: pointer;
`

// TODO: update links once pages exist
const Standard = () => (
  <>
    <Link href="/about" passHref>
      <Anchor>About</Anchor>
    </Link>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Blog
    </Anchor>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Startups
    </Anchor>
  </>
)

export default Standard
