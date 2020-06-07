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
  display: inline-flex;
  justify-content: space-between;
`

export default function AddCardModal() {
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <Modal>
      <Field>
        <Text.H2 variant="primary">Criar novo cartão</Text.H2>
      </Field>
      <Field>
        <Input ref={inputRef} label="Título do cartão" full />
      </Field>
      <Field>
        <CustomTextArea placeholder="Descrição" full />
      </Field>
      <ButtonsRow>
        <Button.Text>Cancelar</Button.Text>
        <Button>Criar</Button>
      </ButtonsRow>
    </Modal>
  )
}
