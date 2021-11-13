import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { theme } from '@gympass/yoga'
import hexToRgb from '@utils/hexToRgb'

const ANIMATION_DURATION = 800
const fadeInAnimation = keyframes`${fadeIn}`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${ANIMATION_DURATION}ms ${fadeInAnimation};
`
const BackgroundLayer = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => hexToRgb(theme.colors.stamina(props), 0.5)};
  z-index: 1000;
`
const ModalCard = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.large}px;
  min-width: calc(${theme.spacing.huge}px * 6);
  border-radius: ${theme.spacing.xxsmall}px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.elevations.large};
  z-index: 1001;
`

const modalRoot = document.getElementById('modal-root')

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Container>
      <BackgroundLayer onClick={onClose} />
      <ModalCard>{children}</ModalCard>
    </Container>,
    modalRoot
  )
}
