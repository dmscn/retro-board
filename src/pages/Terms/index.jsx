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

export default function Terms() {
  return (
    <Page>
      <Box display="flex" flexDirection="column" padding="xxxlarge">
        <Container fluid>
          <Row>
            <Col xxs={12} xl={6}>
              <Text.H2>Termos e Condições</Text.H2>

              <Section>
                <Text>
                  Ao usar o Retro Board, estes termos se aplicarão
                  automaticamente a você - portanto, certifique-se de lê-los com
                  atenção antes de usar nossa aplicação.
                </Text>
              </Section>

              <Section>
                <Text>
                  Leonardo Damasceno e Luciano Moreira estão empenhados em
                  garantir que o Retro Board seja o mais útil e eficiente
                  possível. Por esse motivo, nos reservamos o direito de fazer
                  alterações na aplicação a qualquer momento e por qualquer
                  motivo. Nunca cobraremos pela aplicação ou seus serviços sem
                  deixar bem claro para você exatamente o que você está pagando.
                </Text>
              </Section>

              <Section>
                <Text>
                  Retro Board armazena e processa dados pessoais que você nos
                  forneceu, para fornecer nosso serviço. É sua responsabilidade
                  manter o seu dispositivo e o acesso à aplicação seguros.
                </Text>
              </Section>

              <Section>
                <Text>
                  O Retro Board usa serviços de terceiros que declaram seus
                  Termos e Condições. Link para os Termos e Condições de
                  provedores de serviços terceirizados usados pela aplicação
                </Text>
                <Section>
                  <Text>
                    <Link href="https://firebase.google.com/terms">
                      Firebase
                    </Link>
                  </Text>
                  <Text>
                    <Link href="https://firebase.google.com/terms/analytics">
                      Google Analytics for Firebase
                    </Link>
                  </Text>
                  <Text>
                    <Link href="https://cloud.google.com/terms/">
                      Firestore
                    </Link>
                  </Text>
                  <Text>
                    <Link href="https://docs.github.com/pt/github/site-policy/github-terms-of-service">
                      Github Pages
                    </Link>
                  </Text>
                </Section>
              </Section>

              <Section>
                <Text>
                  Você deve estar ciente de que há certas coisas pelas quais
                  Leonardo Damasceno e Luciano Moreira não se responsabilizam.
                  Certas funções do Retro Board exigirão que ele tenha uma
                  conexão ativa com a Internet. A conexão pode ser wi-fi ou
                  fornecida por sua operadora de rede móvel, mas Leonardo
                  Damasceno e Luciano Moreira não podem se responsabilizar pela
                  aplicação não funcionar se você não tiver acesso a wi-fi ou
                  caso não tenha mais nenhuma cota de dados restante.
                </Text>
              </Section>

              <Section>
                <Text>
                  Se você estiver usando o Retro Board fora de uma área com
                  Wi-Fi, lembre-se de que os termos do contrato com seu provedor
                  de rede móvel ainda se aplicam. Como resultado, você pode ser
                  cobrado por sua operadora de celular pelo custo dos dados
                  durante a conexão ao acessar a aplicação ou outras cobranças
                  de terceiros. Ao usar o Retro Board, você aceita a
                  responsabilidade por quaisquer cobranças, incluindo taxas de
                  roaming de dados, se usar a aplicação fora de seu território
                  (ou seja, região ou país) sem desligar o roaming de dados. Se
                  você não é o pagador de contas do dispositivo no qual está
                  usando o Retro Board, esteja ciente de que presumimos que você
                  recebeu permissão do pagador de contas para usar a aplicação.
                </Text>
              </Section>

              <Section>
                <Text>
                  Na mesma linha, Leonardo Damasceno e Luciano Moreira nem
                  sempre podem se responsabilizar pela maneira como você usa o
                  Retro Board.
                </Text>
              </Section>

              <Section>
                <Text>
                  Com relação à responsabilidade de Leonardo Damasceno e Luciano
                  Moreira pelo uso da aplicação, ao usar o Retro Board é
                  importante lembrar que embora nos esforcemos para que esteja
                  sempre atualizado e correto, contamos com terceiros para nos
                  fornecer informações para que possamos disponibilizá-las para
                  você. Leonardo Damasceno e Luciano Moreira não se
                  responsabilizam por qualquer perda, direta ou indireta, que
                  você experimente em virtude de confiar totalmente nesta
                  funcionalidade da aplicação.
                </Text>
              </Section>

              <Section>
                <Text>
                  Em algum momento, podemos desejar atualizar o Retro Board.
                  Leonardo Damasceno e Luciano Moreira não prometem que sempre
                  atualizarão a aplicação para que seja relevante para você. No
                  entanto, você promete sempre aceitar as atualizações do Retro
                  Board. Também podemos desejar interromper o fornecimento da
                  aplicação e encerrar o uso dele a qualquer momento, sem aviso
                  prévio de encerramento. A menos que informemos o contrário, em
                  caso de rescisão os direitos e licenças concedidos a você
                  nestes termos serão encerrados.
                </Text>
              </Section>

              <Section>
                <Text.Medium>Mudanças nos Termos e Condições</Text.Medium>
                <Text>
                  Podemos atualizar nossos Termos e Condições de tempos em
                  tempos. Portanto, recomendamos que você reveja esta página
                  periodicamente para verificar quaisquer alterações.
                  Notificá-lo-ei de quaisquer alterações, publicando os novos
                  Termos e Condições nesta página.
                </Text>
              </Section>

              <Section>
                <Text>
                  Estes termos e condições são válidos a partir de 02 de
                  dezembro de 2021
                </Text>
                <Text>
                  Se você tiver alguma dúvida ou sugestão sobre nossos Termos e
                  Condições, não hesite em nos contatar em{' '}
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
