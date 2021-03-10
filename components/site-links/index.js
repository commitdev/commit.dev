import Link from 'next/link'
import { rem } from 'polished'
import { func } from 'prop-types'
import styled from 'styled-components'

import { NOOP } from 'helpers/utils'

import { MOBILE_SIZE } from '../../styles/constants'

const Anchor = styled.a`
  text-decoration: none;
  margin-left: ${rem('32px')};
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-left: 0;
  }
`

const SiteLinks = ({ closeMenu }) => (
  <>
    <Link href="/about" passHref>
      <Anchor onClick={closeMenu}>ABOUT</Anchor>
    </Link>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      BLOG
    </Anchor>
  </>
)

SiteLinks.propTypes = {
  closeMenu: func,
}

SiteLinks.defaultProps = {
  closeMenu: NOOP,
}

export default SiteLinks
