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
  const [labelName, setLabelName] = React.useEffect('')

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleSubmit = () => {
    onSubmit(inputRef.current.value)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Text.H2 variant="primary">Criar categoria</Text.H2>
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
        <Button.Text onClick={onClose}>Cancelar</Button.Text>
        <Button onClick={handleSubmit}>Criar</Button>
      </ButtonsRow>
    </Modal>
  )
}
