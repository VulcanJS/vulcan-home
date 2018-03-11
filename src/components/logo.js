import React from 'react'
import { Link } from 'react-router'

import { logo } from '../data/icons.yaml'

import { LogoBlock, LogoImage, Title, Tagline } from '../components/styled-components.js'

const Logo = () => 

  <LogoBlock>

      <LogoImage dangerouslySetInnerHTML={{__html: logo}}/>

      <Title>Vulcan.js</Title>
      <Tagline>The full-stack React+GraphQL framework</Tagline>

  </LogoBlock>


export default Logo