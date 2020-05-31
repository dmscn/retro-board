import React from 'react'
import Avatar from '@components/Avatar'
import { Container, Row, theme } from '@gympass/yoga'

import styled from 'styled-components'

const NavWrapper = styled.nav`
  height: ${theme.spacing.large};
  background: ${theme.colors.primary[2]};
`

const LogoWrapper = styled.span`
  font-size: 32px;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const CustomRow = styled(Row)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xsmall}px ${theme.spacing.small}px;
`
const NavBar = () => (
  <NavWrapper>
    <Container>
      <CustomRow>
        <LogoWrapper>🦛</LogoWrapper>
        <Avatar src="https://source.unsplash.com/random" />
      </CustomRow>
    </Container>
  </NavWrapper>
)

export default NavBar
