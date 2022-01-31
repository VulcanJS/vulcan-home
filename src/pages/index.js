import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import _ from 'underscore'

import Logo from '../components/logo.js'
import { Wrapper, Links } from '../components/styled-components.js'

export default class Index extends React.Component {
  render () {
    return (
      <Wrapper>
        <Helmet
          title="VulcanJS"
          meta={[
            {"name": "description", "content": "VulcanJS: The full-stack React+GraphQL framework"},
          ]}
          link={[
            {rel: "shortcut icon", href: "images/vulcan-logo-border.png"},
          ]}
        />
        <Logo />
        <Links>
          <a href="https://vulcan-docs.vercel.app">Documentation</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/vulcanjs/vulcan-next">GitHub</a>
          &nbsp;|&nbsp;
          <a href="https://medium.com/vulcanjs" data-reactid="15">Blog</a>
          &nbsp;|&nbsp;
          <a href="https://www.youtube.com/channel/UCGIvQQ6zw7ov2cHgD70HFlA" data-reactid="19">YouTube</a>
          &nbsp;|&nbsp;
          <a href="http://slack.vulcanjs.org" data-reactid="21">Slack</a>
          &nbsp;|&nbsp;
          <a href="http://docs.vulcanjs.org">Legacy documentation (Vulcan Meteor)</a>
        </Links>
      </Wrapper>
    )
  }
}
