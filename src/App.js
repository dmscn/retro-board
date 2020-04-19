import { ThemeProvider } from '@gympass/yoga'
import Board from '@pages/Board'
import Welcome from '@pages/Welcome'
import StoreProvider from '@store'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyled from './globalStyles'

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
