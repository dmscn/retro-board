import React from 'react'
import styled from 'styled-components'
import { Text, Icon, theme, Box } from '@gympass/yoga'
import Modal from '@components/Modal'
import { Copy, Check } from '@gympass/yoga-icons'

const Content = styled.div`
  display: flex;
  margin: ${theme.spacing.medium}px 0;
`

function CopyContent({ onCopy }) {
  const href = window.location.href

  function copyToClipboard() {
    navigator.clipboard.writeText(href)
    onCopy()
  }

  return (
    <Box
      display="flex"
      width="100%"
      padding="xsmall"
      justifyContent="center"
      alignItems="center"
      backgroundColor="light"
      borderRadius="xsmall"
    >
      <Text.Tiny color="deep">{href}</Text.Tiny>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingLeft="small"
        style={{ cursor: 'pointer' }}
        onClick={copyToClipboard}
      >
        <Icon as={Copy} width="small" height="small" />
        <Box marginTop="xxxsmall">
          <Text.SmallestException>Copiar</Text.SmallestException>
        </Box>
      </Box>
    </Box>
  )
}

function CopiedSuccess() {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Text.Small>Link copiado</Text.Small>
      <Box marginLeft="xxxsmall">
        <Icon as={Check} width="medium" height="medium" fill="hope" />
      </Box>
    </Box>
  )
}

export default function ShareDialog({ onClose }) {
  const [copied, setCopied] = React.useState(false)

  const onCopy = () => {
    setCopied(true)
    setTimeout(onClose, 800)
  }

  return (
    <Modal onClose={onClose}>
      {!copied && <Text.H4 variant="primary">Compartilhar board</Text.H4>}
      <Content>
        {copied ? <CopiedSuccess /> : <CopyContent onCopy={onCopy} />}
      </Content>
    </Modal>
  )
}
