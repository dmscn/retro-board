import React from 'react'
import { Box, Text, Container, Col, Row } from '@gympass/yoga'

import Page from '@components/Page'

const Section = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    marginVertical="large"
    gap="xxsmall"
  >
    {children}
  </Box>
)

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export default function Security() {
  return (
    <Page>
      <Box display="flex" flexDirection="column" padding="xxxlarge">
        <Container fluid>
          <Row>
            <Col xxs={12} xl={6}>
              <Text.H2>Segurança no Retro Board</Text.H2>
              <Box marginTop="medium">
                <Text.H4>Controle de acesso e segurança</Text.H4>
              </Box>
              <Section>
                <Text.Medium>Acesso de dados</Text.Medium>
                <Text>
                  Não possuímos servidores próprios pois usamos o Firebase como
                  nossa plataforma. O acesso ao painel e aos dados do Firebase é
                  feito por autenticação de dois fatores.
                </Text>
              </Section>

              <Box marginTop="medium">
                <Text.H4>Proteção de dados</Text.H4>
              </Box>

              <Section>
                <Text.Medium>Criptografia de ponta-a-ponta</Text.Medium>
                <Text>
                  Retro Board fornece criptografia de dados na transferência via
                  tecnologia Secure Socket Layer (SSL) de 256 bits e SHA-256 com
                  algoritmo de criptografia RSA. Nosso SSL tem grau A + no{' '}
                  <Link href="https://www.ssllabs.com/ssltest/analyze.html?d=damasceno.digital">
                    relatório de qualidade do SSL Labs.
                  </Link>
                </Text>
                <Box marginTop="medium">
                  <Text>
                    Usamos a plataforma do Google Cloud para armazenar todos os
                    nossos dados. O Google Cloud utiliza criptografia em repouso
                    por padrão com a tecnologia AES256 ou AES128. Você pode ler
                    mais sobre a criptografia do Google Cloud através deste
                    link:
                    <Link href="https://cloud.google.com/security/encryption-at-rest/">
                      https://cloud.google.com/security/encryption-at-rest/
                    </Link>
                  </Text>
                </Box>
              </Section>

              <Box marginTop="medium">
                <Text.H4>Centro de dados e backups</Text.H4>
              </Box>

              <Section>
                <Text.Medium>Centro de dados</Text.Medium>
                <Text>
                  Retro Board está hospedado no Firebase que faz parte do Google
                  Cloud Platform. Nossos dados são hospedados na Central dos
                  EUA. O Google Cloud é uma plataforma muito segura que possui
                  várias certificações: ISO 27001, ISO 27017, ISO 27018, SOC
                  1/2/3, PCI DSS e CSA. Você pode ler mais sobre isso aqui:
                  <br />
                  <Link href="https://cloud.google.com/security/">
                    https://cloud.google.com/security/
                  </Link>{' '}
                  e{' '}
                  <Link href="https://firebase.google.com/support/privacy">
                    https://firebase.google.com/support/privacy
                  </Link>
                </Text>
              </Section>

              <Section>
                <Text.Medium>Controle de acesso físico</Text.Medium>
                <Text>
                  Retro Board está hospedado no Google Cloud Platform. Os
                  centros de dados do Google apresentam um modelo de segurança
                  em camadas, incluindo proteções abrangentes como: cartões de
                  acesso eletrônico personalizados, alarmes, barreiras de acesso
                  de veículos, cercas de perímetro, detectores de metal e
                  biometria.
                </Text>
              </Section>

              <Box marginTop="medium">
                <Text.H4>Dados Privados</Text.H4>
              </Box>

              <Section>
                <Text.Medium>Os dados pertencem a você</Text.Medium>
                <Text>
                  Retro Board usa amplamente os serviços do Firebase. Estamos
                  hospedados na plataforma do Google Cloud que é um serviço
                  muito confiável e de alta disponibilidade. Você pode verificar
                  o status ao vivo do Firebase aqui{' '}
                  <Link href="https://status.firebase.google.com/">
                    https://status.firebase.google.com/
                  </Link>{' '}
                  .
                </Text>
              </Section>

              <Box marginTop="medium">
                <Text.H4>Prevenção</Text.H4>
              </Box>

              <Section>
                <Text.Medium>Prevenção de Ataques e Mitigação</Text.Medium>
                <Text>
                  Usamos Firebase para serviços de autenticação o qual possui
                  recursos para bloquear IP’s que tentem nos atacar. Nos casos
                  em que o mesmo endereço de IP seja usado de forma suspeita, o
                  Firebase limitará o número de novos e-mails / senhas e
                  inscrições anônimas em nosso aplicativo.
                </Text>
              </Section>
            </Col>
          </Row>
        </Container>
      </Box>
    </Page>
  )
}
