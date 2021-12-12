import React from 'react'
import { useHistory } from 'react-router'
import { Box, Button } from '@gympass/yoga'
import RetroBoardLogoWhite from '@assets/img/logos/retro-board-white.svg'

export default function Footer({ style }) {
  const { history } = useHistory()

  const redirectToSecurity = () => history.push(`/security`)
  const redirectToTerms = () => history.push(`/terms`)
  const redirectToPolicy = () => history.push(`/policy`)

  return (
    <Box display="flex" alignItems="flex-end" style={style}>
      <Box
        display="flex"
        flexDirection="row"
        bg="primary"
        justifyContent="space-between"
        alignItems="flex-start"
        paddingVertical="large"
        paddingHorizontal="xxlarge"
        width="100%"
      >
        <RetroBoardLogoWhite height={22} />
        <Box display="flex" flexDirection="row" gap="xxxlarge">
          <Button.Link secondary onClick={redirectToTerms}>
            Termos e Condições
          </Button.Link>
          <Button.Link secondary onClick={redirectToPolicy}>
            Política de Privacidade
          </Button.Link>
          <Button.Link secondary onClick={redirectToSecurity}>
            Segurança
          </Button.Link>
        </Box>
      </Box>
    </Box>
  )
}
