import { createGlobalStyle } from 'styled-components'
import { theme } from '@gympass/yoga'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }

  ::selection {
    color: ${theme.colors.secondary[0]};
    background: ${theme.colors.primary[2]};
  }
  
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    
  }

  #modal-root {
    position: relative;
    z-index: 99999;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

`

export default GlobalStyle
