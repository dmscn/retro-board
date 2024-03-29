import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import {
  theme,
  Container,
  Row,
  Col,
  Text,
  Button,
  Input,
  Box,
} from '@gympass/yoga'
import { LogOut } from '@gympass/yoga-icons'

import { addNewBoard } from '@services/firebase'

import Page from '@components/Page'
import { useAuth } from '@contexts/auth'
import { removeBoardById } from '@services/firebase'
import RemoveIcon from '@components/RemoveIcon'
import Footer from '@components/Footer'

const ANIMATION_DURATION = 200

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BoardsList = styled.ul`
  padding: 0 ${theme.spacing.xxlarge}px;
`

const BoardListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.large}px;
  margin-bottom: ${theme.spacing.small}px;
  border: 1px solid ${theme.colors.elements.lineAndBorders};
  border-radius: ${theme.spacing.xsmall}px;
  transition: box-shadow ${ANIMATION_DURATION}ms ease-in-out;
  transition: border ${ANIMATION_DURATION}ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.elevations.medium};
    border: 2px solid ${theme.colors.primary[3]};
  }

  .delete-icon {
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  }

  &:hover .delete-icon {
    opacity: 1;
  }

  a {
    text-decoration: none;
  }
`
const AddNewBoard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${theme.spacing.xsmall}px;
  margin-top: ${theme.spacing.large}px;

  .yoga-button {
    margin-left: ${theme.spacing.medium}px;
  }
`

const EmptyMessage = styled(Text.H4)`
  margin: ${theme.spacing.large}px;
  text-align: center;
`

export default function Profile() {
  const history = useHistory()
  const { userBoards, signOut } = useAuth()

  const [boardName, setBoardName] = React.useState('')

  const createNewBoard = () => {
    if (!boardName) return
    addNewBoard(boardName)
    setBoardName('')
  }

  const gotToBoard = id => () => history.push(`/board/${id}`)

  const removeBoard = id => event => {
    event.stopPropagation()
    removeBoardById(id)
  }

  return (
    <Page>
      <Box padding="xxxlarge">
        <Container fluid>
          <Header>
            <Text.H3>Seus boards</Text.H3>
            <Button.Outline icon={LogOut} onClick={signOut}>
              Sair
            </Button.Outline>
          </Header>
          <BoardsList>
            <Box marginTop="medium">
              {userBoards.length > 0 ? (
                userBoards.map(({ id, name }) => (
                  <Row key={id}>
                    <Col xxs={12} xl-start={4} xl={6}>
                      <BoardListItem onClick={gotToBoard(id)}>
                        <Text>{name}</Text>
                        <RemoveIcon
                          className="delete-icon"
                          width={20}
                          height={20}
                          onClick={removeBoard(id)}
                        />
                      </BoardListItem>
                    </Col>
                  </Row>
                ))
              ) : (
                <Row>
                  <Col xxs={12}>
                    <EmptyMessage>Nenhum board...</EmptyMessage>
                  </Col>
                </Row>
              )}
            </Box>
            <Row>
              <Col xxs={12} lg-start={5} lg={4}>
                <AddNewBoard>
                  <Input
                    placeholder="Título do novo board 📌"
                    value={boardName}
                    onChange={e => setBoardName(e.target.value)}
                    label=""
                    cleanable={false}
                    full
                  />
                  <Button.Outline
                    className="yoga-button"
                    onClick={createNewBoard}
                    disabled={!boardName}
                  >
                    Criar
                  </Button.Outline>
                </AddNewBoard>
              </Col>
            </Row>
          </BoardsList>
        </Container>
      </Box>
      <Footer style={{ height: '100%' }} />
    </Page>
  )
}
