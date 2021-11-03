import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Container, Row, Col, Button, theme } from '@gympass/yoga'

import GoogleLogo from '@assets/img/logos/google.svg'
import LoginIllustration from '@assets/img/illustrations/svg/login.svg'

import { useAuth } from '@contexts/auth'

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

export default function Login() {
  const history = useHistory()
  const location = useLocation()
  const { googleSignIn } = useAuth()

  const from = location?.state?.from || { pathname: '/profile' }

  const logUser = () => googleSignIn().then(() => history.replace(from))

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col xxs={12} lg={5} lg-start={5}>
            <LoginIllustration
              preserveAspectRatio="xMidYMid meet"
              height={300}
              width={300}
            />
            <Title variant="primary">Faça seu login</Title>
            <Button.Outline full onClick={logUser}>
              <ButtonContent>
                <GoogleLogo height={20} width={20} />{' '}
                <span className="text">Login Google</span>
              </ButtonContent>
            </Button.Outline>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}
