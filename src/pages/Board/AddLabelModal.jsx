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

export default function AddLabelModal({ onClose, onSubmit }) {
  const inputRef = React.useRef()
  const [labelName, setLabelName] = React.useState('')

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleSubmit = () => {
    onSubmit(inputRef.current.value)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Text.H4 variant="primary">Criar categoria</Text.H4>
      <Content>
        <Input
          ref={inputRef}
          value={labelName}
          onChange={e => setLabelName(e.target.value)}
          label="Nome da categoria"
          full
        />
      </Content>
      <ButtonsRow>
        <Button.Text onClick={onClose} small>
          Cancelar
        </Button.Text>
        <Button onClick={handleSubmit} small>
          Criar
        </Button>
      </ButtonsRow>
    </Modal>
  )
}
