import React from 'react'
import styled from 'styled-components'
import { Text, Input, TextArea, Button, theme } from '@gympass/yoga'
import Modal from '@components/Modal'

const CustomTextArea = styled(TextArea)`
  > div {
    box-sizing: border-box;
  }
`

const Field = styled.div`
  margin-bottom: ${theme.spacing.medium}px;
`

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function AddCardModal({ onCancel, onSubmit }) {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleSubmit = () => {
    onSubmit({ title, description })
    onCancel()
  }

  return (
    <Modal onClose={onCancel}>
      <Field>
        <Text.H4 variant="primary">Criar novo cartão</Text.H4>
      </Field>
      <Field>
        <Input
          ref={inputRef}
          label="Título do cartão"
          value={title}
          onChange={e => setTitle(e.target.value)}
          cleanable={false}
          full
        />
      </Field>
      <Field>
        <CustomTextArea
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          full
        />
      </Field>
      <ButtonsRow>
        <Button.Text onClick={onCancel} small>
          Cancelar
        </Button.Text>
        <Button onClick={handleSubmit} small>
          Criar
        </Button>
      </ButtonsRow>
    </Modal>
  )
}
