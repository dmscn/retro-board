import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Container, Row, Col, Box, Button, theme } from '@gympass/yoga'

import GoogleLogo from '@assets/img/logos/google.svg'
import LoginIllustration from '@assets/img/illustrations/svg/login.svg'

import { useAuth } from '@contexts/auth'

const LGPD_COMPLIENCE_TEXT =
  'Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.'

const PageWrapper = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.energy[0]};
`

const Title = styled(Text.H2)`
  margin-top: ${theme.spacing.large}px;
  margin-bottom: ${theme.spacing.xxlarge}px;
  text-align: center;
`

const ButtonContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .text {
    margin-left: ${theme.spacing.medium}px;
  }
`

const FixedBotton = styled.footer`
  height: auto;
  background-color: ${theme.colors.attention};
  /* position: absolute;
  bottom: 0;
  right: 0;
  left: 0; */
  padding: 16px 64px;
`
export default function Login() {
  const history = useHistory()
  const location = useLocation()
  const { googleSignIn } = useAuth()

  const from = location?.state?.from || { pathname: '/profile' }

  const logUser = () => googleSignIn().then(() => history.replace(from))

  return (
    <PageWrapper>
      <Box display="flex" flexDirection="column" height="100%">
        <Container fluid style={{ height: '100%' }}>
          <Row>
            <Col xxs={12} lg={5} lg-start={5}>
              <Box
                display="flex"
                flexDirection="column"
                flexGrow={1}
                justifyContent="center"
                alignItems="center"
              >
                <LoginIllustration
                  preserveAspectRatio="xMidYMid meet"
                  height={300}
                  width={300}
                />
                <Title variant="primary">Faça seu login</Title>
                <Button.Outline onClick={logUser}>
                  <ButtonContent>
                    <GoogleLogo height={20} width={20} />{' '}
                    <span className="text">Login Google</span>
                  </ButtonContent>
                </Button.Outline>
              </Box>
            </Col>
          </Row>
          {/* <Box display="flex" flexGrow={1} backgroundColor="stamina" width="100%"> */}

          {/* </Box> */}
        </Container>
        <Box
          display="flex"
          alignItems="flex-end"
          height="100%"
          marginTop="small"
        >
          <FixedBotton>
            <Text.Regular>{LGPD_COMPLIENCE_TEXT}</Text.Regular>
          </FixedBotton>
        </Box>
      </Box>
    </PageWrapper>
  )
}
