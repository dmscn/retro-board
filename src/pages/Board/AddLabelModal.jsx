import React from 'react'
import styled from 'styled-components'
import { Text, Input, Button, theme, Box, Tag } from '@gympass/yoga'
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

export default function AddLabelModal({ onClose, onSubmit }) {
  const inputRef = React.useRef()
  const [labelName, setLabelName] = React.useState('')
  const { labels } = useBoard()

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleSubmit = label => {
    const labelText = label || inputRef.current.value
    onSubmit(labelText)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Box maxWidth={400}>
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
        {labels && (
          <Box
            display="flex"
            flexWrap="wrap"
            gap="xxxsmall"
            margin="xxsmall"
            marginBottom="medium"
          >
            {labels.map(({ label }) => (
              <Tag
                key={label}
                style={{ cursor: 'pointer' }}
                onClick={() => handleSubmit(label)}
              >
                {label}
              </Tag>
            ))}
          </Box>
        )}
        <ButtonsRow>
          <Button.Text onClick={onClose} small>
            Cancelar
          </Button.Text>
          <Button onClick={() => handleSubmit()} small>
            Criar
          </Button>
        </ButtonsRow>
      </Box>
    </Modal>
  )
}
