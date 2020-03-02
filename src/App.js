import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Text } from '@gympass/yoga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Welcome from '@pages/Welcome'
import Board from '@pages/Board'

const App = () => (
  <Router>
    <ThemeProvider theme="corporate">
      <Text.H1>Hello World</Text.H1>
      <Switch>
        <Route path="/board/:slug">
          <Board />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
