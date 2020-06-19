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

export default function AddColumnModal({ onCancel, onSubmit }) {
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleOnSubmit = () => onSubmit(inputRef.current.value)

  return (
    <Modal onClose={onCancel}>
      <Text.H2 variant="primary">Criar nova coluna</Text.H2>
      <Content>
        <Input ref={inputRef} label="Nome da nova coluna" full />
      </Content>
      <ButtonsRow>
        <Button.Text onClick={onCancel}>Cancelar</Button.Text>
        <Button onClick={handleOnSubmit}>Criar</Button>
      </ButtonsRow>
    </Modal>
  )
}
