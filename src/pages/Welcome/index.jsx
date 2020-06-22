import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Text } from '@gympass/yoga'
import WelcomeIllustration from '@assets/img/illustrations/svg/welcome.svg'
import { addNewBoard } from '@services/firebase'
import * as Styled from './styled'
import { useAuth } from '@contexts/auth'

export default function Welcome() {
  const history = useHistory()
  const { user, googleSignIn } = useAuth()

  const createNewBoard = async () => {
    if (!user) await googleSignIn()
    const id = await addNewBoard('Untitled')
    history.push(`/board/${id}`)
  }

  const logUser = () =>
    googleSignIn().then(() => {
      // history.push('/profile')
    })

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
          <Text.H3 variant="primary">or</Text.H3>
        </Styled.CenteredRow>
        <Styled.ButtonsRow>
          <Button className="with-margin" inverted onClick={logUser}>
            Sign in
          </Button>
          <Button inverted onClick={logUser}>
            Sign up
          </Button>
        </Styled.ButtonsRow>
      </Container>
    </Styled.ViewportLane>
  )
}
