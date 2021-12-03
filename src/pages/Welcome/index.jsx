import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Text, Box } from '@gympass/yoga'
import WelcomeIllustration from '@assets/img/illustrations/svg/welcome.svg'
import Page from '@components/Page'
import Footer from '@components/Footer'
import GoogleLogo from '@assets/img/logos/google.svg'
import { useAuth } from '@contexts/auth'

const LGPD_COMPLIENCE_TEXT =
  'Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.'

export default function Welcome() {
  const history = useHistory()

  const { user, googleSignIn } = useAuth()

  const logUser = async () => {
    if (!user) await googleSignIn()
    history.replace('/profile')
  }

  return (
    <Page inverted>
      <Container fluid>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box marginHorizontal="small" marginVertical="xxlarge">
            <Text.H3 variant="primary" style={{ textAlign: 'center' }}>
              Gestão fácil das suas retros.
            </Text.H3>
          </Box>
          <Box margin="medium">
            <WelcomeIllustration
              preserveAspectRatio="xMidYMin slice"
              height={300}
              width={300}
              viewport="0 0 300 300"
            />
          </Box>
          <Box
            display="flex"
            maxWidth={400}
            justifyContent="space-around"
            margin="medium"
          >
            <Button.Outline onClick={logUser}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="xsmall"
              >
                <GoogleLogo height={20} width={20} />
                <span className="text">Login Google</span>
              </Box>
            </Button.Outline>
          </Box>
        </Box>
      </Container>
      <Box display="flex" alignItems="flex-end" height="100%" marginTop="small">
        <Box
          bg="attention"
          paddingVertical="large"
          paddingHorizontal="xxxlarge"
        >
          <Text.Regular>{LGPD_COMPLIENCE_TEXT}</Text.Regular>
        </Box>
      </Box>
      <Footer />
    </Page>
  )
}
