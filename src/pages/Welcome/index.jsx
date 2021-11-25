import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Text, Box } from '@gympass/yoga'
import WelcomeIllustration from '@assets/img/illustrations/svg/welcome.svg'
import { addNewBoard } from '@services/firebase'
import * as Styled from './styled'
import { useAuth } from '@contexts/auth'

export default function Welcome() {
  const history = useHistory()
  const { user } = useAuth()

  const goToLogin = () => history.push('/login')

  const createNewBoard = async () => {
    if (!user) goToLogin()
    const id = await addNewBoard('Untitled')
    history.push(`/board/${id}`)
  }

  return (
    <Box height="100%" display="flex" flexDirection="column" padding="medium">
      <Container fluid>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box marginHorizontal="small" marginVertical="xxlarge">
            <Text.H1 variant="primary" style={{ textAlign: 'center' }}>
              Gestão fácil das suas retros.
            </Text.H1>
          </Box>
          <Button onClick={createNewBoard}>Experimentar</Button>
          <Box margin="medium">
            <WelcomeIllustration
              preserveAspectRatio="xMidYMin slice"
              height={300}
              width={300}
              viewport="0 0 300 300"
            />
          </Box>
          <Text.H3 variant="primary">ou</Text.H3>
          <Box
            display="flex"
            maxWidth={400}
            justifyContent="space-around"
            margin="medium"
          >
            <Box marginRight="medium">
              <Styled.FixedWidthButton
                className="with-margin"
                onClick={goToLogin}
              >
                Login
              </Styled.FixedWidthButton>
            </Box>
            <Styled.FixedWidthButton onClick={goToLogin}>
              Registrar
            </Styled.FixedWidthButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
