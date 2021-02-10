import Link from 'next/link'
import { rem } from 'polished'
import { func } from 'prop-types'
import styled from 'styled-components'

const NOOP = () => {}

const Anchor = styled.a`
  text-decoration: none;
  margin-left: ${rem('32px')};
  cursor: pointer;
`

// TODO: update links once pages exist
const Links = ({ onClick }) => (
  <>
    <Link href="/about" passHref>
      <Anchor onClick={onClick}>About</Anchor>
    </Link>
    <Anchor
      onClick={onClick}
      href="https://blog.commit.dev/"
      target="_blank"
      rel="noreferrer"
    >
      Blog
    </Anchor>
    <Anchor
      onClick={onClick}
      href="https://blog.commit.dev/"
      target="_blank"
      rel="noreferrer"
    >
      Startups
    </Anchor>
  </>
)

Links.propTypes = {
  onClick: func,
}

Links.defaultProps = {
  onClick: NOOP,
}

export default Links
