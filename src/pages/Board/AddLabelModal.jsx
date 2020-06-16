import React from 'react'
import styled from 'styled-components'
import { Text, Input, Button, theme } from '@gympass/yoga'
import Modal from '@components/Modal'

const Content = styled.div`
  display: flex;
  margin: ${theme.spacing.medium}px 0;
`

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function AddLabelModal({ onCancel }) {
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <Modal onClose={onCancel}>
      <Text.H2 variant="primary">Criar categoria</Text.H2>
      <Content>
        <Input ref={inputRef} label="Nome da categoria" full />
      </Content>
      <ButtonsRow>
        <Button.Text onClick={onCancel}>Cancelar</Button.Text>
        <Button>Criar</Button>
      </ButtonsRow>
    </Modal>
  )
}
