import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import Logo from '../components/logo.js'

const contents = `
  Sorry, I couldn't find what you were looking for.
`
        
const Error404 = () =>
  <div>
    <Logo />
    <p dangerouslySetInnerHTML={{ __html: md.render(contents) }} />
  </div>

export default Error404