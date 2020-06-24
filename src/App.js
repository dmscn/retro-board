import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as YogaProvider } from '@gympass/yoga'
import GlobalStyled from './globalStyles'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import theme from '@assets/style/theme'
import { AuthProvider, useAuth } from '@contexts/auth'

import Board from '@pages/Board'
import Welcome from '@pages/Welcome'
import Profile from '@pages/Profile'

const AuthProtectecdRoute = ({ children, ...rest }) => {
  const { user, initialized } = useAuth()

  return (
    initialized && (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
        }
      />
    )
  )
}

function App() {
  return (
    <YogaProvider theme="Gyms">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <GlobalStyled />
            <Switch>
              <AuthProtectecdRoute path="/board/:slug">
                <Board />
              </AuthProtectecdRoute>
              <AuthProtectecdRoute path="/profile">
                <Profile />
              </AuthProtectecdRoute>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </YogaProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
