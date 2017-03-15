import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import _ from 'underscore'

import Logo from '../components/logo.js'
import { Wrapper, Links } from '../components/styled-components.js'

export default class Index extends React.Component {
  render () {
    return (
      <Wrapper>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "VulcanJS: The full-stack React+GraphQL framework"},
          ]}
          link={[
            {rel: "shortcut icon", href: "images/vulcan-logo-border.png"},
          ]}
        />
        <Logo />
        <Links>
          <a href="http://docs.vulcanjs.org">Documentation</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/TelescopeJS/Telescope/">GitHub</a>
        </Links>
      </Wrapper>
    )
  }
}
