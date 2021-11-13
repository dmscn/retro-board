import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { theme } from '@gympass/yoga'

import RetroBoardLogo from '@assets/img/logos/retro-board.svg'
import { useAuth } from '@contexts/auth'

import Avatar from '@components/Avatar'

const NavWrapper = styled.nav`
  box-sizing: border-box;
  background: ${theme.colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xsmall}px ${theme.spacing.small}px;
`

const LogoWrapper = styled.span`
  font-size: 32px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: ${theme.spacing.small}px;
`

const NavBar = () => {
  const history = useHistory()
  const {
    user: { photoURL },
  } = useAuth()

  const goToProfile = () => history.push('/profile')

  return (
    <NavWrapper>
      <LogoWrapper>
        <RetroBoardLogo height={22} />
      </LogoWrapper>
      <Avatar picture={photoURL} onClick={goToProfile} />
    </NavWrapper>
  )
}

export default NavBar
