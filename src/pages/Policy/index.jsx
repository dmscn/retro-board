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

export default function Policy() {
  return (
    <Page>
      <Box display="flex" flexDirection="column" padding="xxxlarge">
        <Container fluid>
          <Row>
            <Col xxs={12} xl={6}>
              <Text.H2>Política de Privacidade</Text.H2>

              <Section>
                <Text>
                  Leonardo Damasceno e Luciano Moreira construíram o Retro Board
                  aplicativo como um aplicativo open source. Este SERVIÇO é
                  fornecido pelos mesmos sem custo e é pretendido para uso como
                  está.
                </Text>
              </Section>

              <Section>
                <Text>
                  Esta página é usada para informar os visitantes sobre as
                  políticas de coleta, uso e divulgação de Dados Pessoais
                  Informações de quem decidiu usar nosso serviço.
                </Text>
              </Section>

              <Section>
                <Text>
                  Ao optar por usar nosso Serviço, você concorda com a coleta e
                  uso de informações relacionadas a esta política. As
                  informações pessoais que são coletadas são usadas para
                  fornecer e melhorar nosso serviço. Não usaremos ou
                  compartilharemos suas informações com qualquer pessoa, exceto
                  conforme descrito nesta Política de Privacidade.
                </Text>
              </Section>

              <Section>
                <Text>
                  Os termos usados nesta Política de Privacidade têm os mesmos
                  significados como em nossos Termos e Condições, que estão
                  acessíveis em{' '}
                  <Link href="https://damasceno.digital/retro-board/#/terms">
                    Termos e Condições
                  </Link>
                  , a menos que definido de outra forma nesta Política de
                  Privacidade.
                </Text>
              </Section>

              <Section>
                <Text.Medium>Coleta e uso de informações</Text.Medium>
                <Text>
                  Para uma melhor experiência, ao usar nosso Serviço, posso
                  exigir que você nos forneça certas informações de
                  identificação pessoal, incluindo, mas não se limitando a
                  e-mail, nome, imagem de perfil. As informações que solicitamos
                  serão retidas em seu dispositivo e não serão coletadas por nós
                  de forma alguma.
                </Text>
              </Section>

              <Section>
                <Text>
                  O aplicativo usa serviços de terceiros que podem coletar
                  informações usadas para identificá-lo.
                </Text>
              </Section>

              <Section>
                <Text>
                  Link para a política de privacidade de provedores de serviços
                  terceirizados usados pelo aplicativo:
                </Text>
                <Section>
                  <Text>
                    <Link href="https://firebase.google.com/support/privacy">
                      Firebase
                    </Link>
                  </Text>
                  <Text>
                    <Link href="https://firebase.google.com/policies/analytics">
                      Google Analytics for Firebase
                    </Link>
                  </Text>
                  <Text>
                    <Link href="https://firebase.google.com/terms/firebase-mcc">
                      Firestore
                    </Link>
                  </Text>
                  <Text>
                    <Link href="https://docs.github.com/en/github/site-policy/github-terms-for-additional-products-and-features#pages">
                      Github Pages
                    </Link>
                  </Text>
                </Section>
              </Section>

              <Section>
                <Text>
                  Quero informar que sempre que você usar o meu serviço, em um
                  caso de erro no aplicativo eu coleto dados e informações (por
                  meio de produtos de terceiros) com o chamado Log Data. Estes
                  dados de registro podem incluir informações como seu
                  dispositivo Endereço de protocolo da Internet (“IP”), nome do
                  dispositivo, operação versão do sistema, a configuração do
                  aplicativo ao utilizar meu Serviço, a hora e data de uso do
                  Serviço, e outras estatísticas.
                </Text>
              </Section>

              <Section>
                <Text.Medium>Provedores de serviço</Text.Medium>
                <Text>
                  Posso empregar empresas terceirizadas e indivíduos devido ao
                  seguintes razões:
                </Text>
                <Section>
                  <Text.Tiny>Para facilitar nosso serviço;</Text.Tiny>
                  <Text.Tiny>
                    Para realizar serviços relacionados a aplicação;
                  </Text.Tiny>
                  <Text.Tiny>
                    Para nos ajudar a analisar como nosso serviço é usado.
                  </Text.Tiny>
                </Section>
              </Section>

              <Section>
                <Text>
                  Quero informar aos usuários do Retro Board que estes terceiros
                  podem ter acesso às suas informações pessoais. O motivo é para
                  que possam realizar as tarefas atribuídas a eles em nosso
                  nome. No entanto, eles são obrigados a não divulgar ou usar o
                  informações para qualquer outro propósito.
                </Text>
              </Section>

              <Section>
                <Text.Medium>Segurança</Text.Medium>
                <Text>
                  Eu valorizo sua confiança em nos fornecer suas informações
                  pessoais, portanto, estamos nos esforçando para usar meios
                  comercialmente aceitáveis de protege-los. Mas lembre-se de que
                  nenhum método de transmissão pela internet, ou método de
                  armazenamento eletrônico é 100% seguro e confiável, e não
                  posso garantir absoluto segurança.
                </Text>
              </Section>

              <Section>
                <Text.Medium>Mudanças na Política de Privacidade</Text.Medium>
                <Text>
                  Posso atualizar nossa Política de Privacidade de tempos em
                  tempos. Assim, é aconselhado revisar esta página
                  periodicamente para quaisquer alterações. Irei notificá-lo de
                  quaisquer alterações, postando a nova Política de Privacidade
                  Política nesta página.
                </Text>
              </Section>

              <Section>
                <Text>
                  Esta política está em vigor a partir de 02 de dezembro de 2021
                </Text>
                <Text>
                  Se você tiver alguma dúvida ou sugestão sobre minha Política
                  de Privacidade, não hesite em nos contatar em{' '}
                  <Link href="mailto:support@damasceno.digital">
                    support@damasceno.digital
                  </Link>
                  .
                </Text>
              </Section>
            </Col>
          </Row>
        </Container>
      </Box>
    </Page>
  )
}
