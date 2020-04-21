import { ThemeProvider } from 'styled-components'
import { ThemeProvider as YogaProvider } from '@gympass/yoga'
import Board from '@pages/Board'
import Welcome from '@pages/Welcome'
import StoreProvider from '@store'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyled from './globalStyles'

import theme from '@assets/style/theme'

const App = () => (
  <Router>
    <GlobalStyled />
    <YogaProvider theme="corporate">
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Switch>
            <Route path="/board/:slug">
              <Board />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </StoreProvider>
      </ThemeProvider>
    </YogaProvider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
