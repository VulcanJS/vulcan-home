import React from 'react'

import { Layout } from '../components/styled-components.js'
 
const Template = ({ children }) => <Layout>{children()}</Layout>

export default Template