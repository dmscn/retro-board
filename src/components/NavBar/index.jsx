import React from 'react'
import Avatar from '@components/Avatar'
import { theme } from '@gympass/yoga'
import RetroBoardLogo from '@assets/img/logos/retro-board-white.svg'

import styled from 'styled-components'

const NavWrapper = styled.nav`
  box-sizing: border-box;
  background: ${theme.colors.primary[3]};
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
const NavBar = () => (
  <NavWrapper>
    <LogoWrapper>
      <RetroBoardLogo height={22} />
    </LogoWrapper>
    <Avatar src="https://source.unsplash.com/random" />
  </NavWrapper>
)

export default NavBar
