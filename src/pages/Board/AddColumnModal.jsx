import React from 'react'
import styled from 'styled-components'
import { Text, Input, Button, theme } from '@gympass/yoga'
import Modal from '@components/Modal'
import { useBoard } from '@contexts/board'

const Content = styled.div`
  display: flex;
  margin: ${theme.spacing.medium}px 0;
`

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function AddColumnModal({ onClose }) {
  const { addColumn } = useBoard()
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleOnSubmit = () => {
    addColumn(inputRef.current.value)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Text.H2 variant="primary">Criar nova coluna</Text.H2>
      <Content>
        <Input ref={inputRef} label="Nome da nova coluna" full />
      </Content>
      <ButtonsRow>
        <Button.Text onClick={onClose}>Cancelar</Button.Text>
        <Button onClick={handleOnSubmit}>Criar</Button>
      </ButtonsRow>
    </Modal>
  )
}
