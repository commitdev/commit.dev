import React from 'react'

import { node } from 'prop-types'

import { SiteHeader } from 'components'
import { ContentRoot } from 'components/layout'

const Page = ({ children }) => (
  <ContentRoot>
    <SiteHeader />
    {children}
  </ContentRoot>
)

Page.propTypes = {
  children: node,
}

export default Page
