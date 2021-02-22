import Link from 'next/link'
import { rem } from 'polished'
import { func } from 'prop-types'
import styled from 'styled-components'

import { NOOP } from 'helpers/utils'

const Anchor = styled.a`
  text-decoration: none;
  margin-left: ${rem('32px')};
  cursor: pointer;
`

// TODO: update links once pages exist
const Links = ({ closeMenu }) => (
  <>
    <Link href="/about" passHref>
      <Anchor onClick={closeMenu}>About</Anchor>
    </Link>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Blog
    </Anchor>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Startups
    </Anchor>
  </>
)

Links.propTypes = {
  closeMenu: func,
}

Links.defaultProps = {
  closeMenu: NOOP,
}

export default Links
