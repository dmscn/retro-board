import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyled from './globalStyles'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import theme from '@assets/style/theme'
import { AuthProvider, useAuth } from '@contexts/auth'

import Board from '@pages/Board'
import Welcome from '@pages/Welcome'
import Profile from '@pages/Profile'
import Login from '@pages/Login'

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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
