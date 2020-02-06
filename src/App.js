import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Text } from '@gympass/yoga'

const App = () => (
  <ThemeProvider theme="corporate">
    <Text.H1>Hello World</Text.H1>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
