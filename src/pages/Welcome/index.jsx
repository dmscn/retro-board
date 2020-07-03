import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Text } from '@gympass/yoga'
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
    <Styled.ViewportLane>
      <Container>
        <Styled.CenteredRow>
          <Text.H1 variant="primary">Gestão fácil das suas retros.</Text.H1>
        </Styled.CenteredRow>
        <Styled.CenteredRow>
          <Button onClick={createNewBoard}>Experimentar</Button>
        </Styled.CenteredRow>
        <Styled.IllustrationWrapper>
          <WelcomeIllustration
            preserveAspectRatio="xMidYMin slice"
            height={300}
            width={300}
            viewport="0 0 300 300"
          />
        </Styled.IllustrationWrapper>
        <Styled.CenteredRow>
          <Text.H3 variant="primary">ou</Text.H3>
        </Styled.CenteredRow>
        <Styled.ButtonsRow>
          <Styled.FixedWidthButton
            className="with-margin"
            inverted
            onClick={goToLogin}
          >
            Login
          </Styled.FixedWidthButton>
          <Styled.FixedWidthButton inverted onClick={goToLogin}>
            Registrar
          </Styled.FixedWidthButton>
        </Styled.ButtonsRow>
      </Container>
    </Styled.ViewportLane>
  )
}
