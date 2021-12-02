import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { theme, Text, Box } from '@gympass/yoga'

import RetroBoardLogoWhite from '@assets/img/logos/retro-board-white.svg'
import RetroBoardLogoBlack from '@assets/img/logos/retro-board-black.svg'
import { useAuth } from '@contexts/auth'

import Avatar from '@components/Avatar'

const NavWrapper = styled.nav`
  box-sizing: border-box;
  background: ${({ inverted }) =>
    inverted ? theme.colors.white : theme.colors.primary};
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
  cursor: pointer;
`

const NavBar = ({ inverted = false }) => {
  const history = useHistory()
  const { user } = useAuth()
  const photoURL = user?.photoURL

  const goToProfile = () => history.push('/profile')

  return (
    <NavWrapper inverted={inverted}>
      <LogoWrapper>
        {inverted ? (
          <RetroBoardLogoBlack height={22} onClick={goToProfile} />
        ) : (
          <RetroBoardLogoWhite height={22} onClick={goToProfile} />
        )}
      </LogoWrapper>
      {user && !inverted && (
        <Box
          display="flex"
          alignItems="center"
          gap="xsmall"
          paddingHorizontal="xxsmall"
          style={{ cursor: 'pointer' }}
          onClick={goToProfile}
        >
          <Text inverted={!inverted}>Perfil</Text>
          <Avatar picture={photoURL} />
        </Box>
      )}
    </NavWrapper>
  )
}

export default NavBar
