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
        <Styled.CenteredRow>
          <Text.H1 variant="primary">Easy meeting management.</Text.H1>
        </Styled.CenteredRow>
        <Styled.CenteredRow>
          <Button onClick={createNewBoard}>Try it</Button>
        </Styled.CenteredRow>
        <Styled.IllustrationWrapper>
          <WelcomeIllustration
            preserveAspectRatio="xMidYMin slice"
            height={300}
            width={300}
            viewPort="0 0 300 300"
          />
        </Styled.IllustrationWrapper>
      </Container>
    </Styled.ViewportLane>
  )
}
