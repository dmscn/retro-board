import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Text } from '@gympass/yoga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import StoreProvider from '@store'

import GlobalStyled from './globalStyles'
import Welcome from '@pages/Welcome'
import Board from '@pages/Board'

const App = () => (
  <Router>
    <GlobalStyled />
    <ThemeProvider theme="corporate">
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
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
