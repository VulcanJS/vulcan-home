import { injectGlobal, css, keyframes } from 'styled-components';

import styled from 'styled-components';
import {red, orange, yellow, blue} from '../data/colors.yaml'
import fonts from '../data/fontsizes.yaml'

/* 

Globals

*/

const spacing = {
  quarter: "5px",
  half: "10px",
  single: "20px",
  double: "40px"
}

const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`
const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${ css(...args) }
  }
`
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`

const easeOutCubic = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'

injectGlobal`
  
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body{
    font-family: "Space Mono", monospace, sans-serif;
    font-variant-ligatures: no-common-ligatures
    padding: 0;
    margin: 0;
    color: ${blue};
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0 0 ${spacing.single} 0;
    line-height: 1.3;
  }

  p{
    margin: 0;
    line-height: 1.6;
  }

  a{
    color: ${red};
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: ${blue};
    }
  }
`;

export const Layout = styled.div`
  line-height: 1.6;
  position: relative;
`

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/* 

Logo

*/


export const LogoBlock = styled.div`
  text-align: center;
`

export const LogoImage = styled.div`
  svg{
    height: 200px;
    width: 200px;
  }
`

export const Title = styled.h1`
  font-size: 2.2rem;
`

export const Tagline = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
`

export const Links = styled.div`
`