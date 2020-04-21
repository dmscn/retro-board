import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Text } from '@gympass/yoga'
import WelcomeIllustration from '@assets/img/illustrations/svg/welcome.svg'

import { generateNewBoardHash } from '@services/api'

import * as Styled from './styled'

export default function Welcome() {
  const history = useHistory()

  const createNewBoard = async () => {
    const hash = await generateNewBoardHash()
    history.push(`/board/${hash}`)
  }

  return (
    <Styled.ViewportLane>
      <Container>
        <Text.H1 variant="primary">Easy meeting management.</Text.H1>
        <Button onClick={createNewBoard}>Try it</Button>
        <WelcomeIllustration />
      </Container>
    </Styled.ViewportLane>
  )
}
