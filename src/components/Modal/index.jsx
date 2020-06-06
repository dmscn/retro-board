import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import hexToRgb from '@utils/hexToRgb'

const BackgroundLayer = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => hexToRgb(theme.colors.dark(props), 0.5)};
`
const ModalCard = styled.main`
  padding: ${theme.spacing.medium}px;
  min-width: calc(${theme.spacing.huge}px * 6);
  min-height: calc(${theme.spacing.huge}px * 4);
  border-radius: ${theme.spacing.xxsmall}px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.elevations.large};
`

export default function Modal({ children }) {
  return (
    <BackgroundLayer>
      <ModalCard>{children}</ModalCard>
    </BackgroundLayer>
  )
}
