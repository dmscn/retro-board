import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { theme } from '@gympass/yoga'
import hexToRgb from '@utils/hexToRgb'

const ANIMATION_DURATION = 800
const fadeInAnimation = keyframes`${fadeIn}`

const BackgroundLayer = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => hexToRgb(theme.colors.dark(props), 0.5)};

  animation: ${ANIMATION_DURATION}ms ${fadeInAnimation};
`
const ModalCard = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.large}px;
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
