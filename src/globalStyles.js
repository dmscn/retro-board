import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
`

export default GlobalStyle
