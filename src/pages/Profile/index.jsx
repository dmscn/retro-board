import React from 'react'
import styled from 'styled-components'
import { theme, Container, Row, Col, Text } from '@gympass/yoga'
import { Link } from 'react-router-dom'

import Page from '@components/Page'
import { useAuth } from '@contexts/auth'
import { removeBoardById } from '@services/firebase'
import RemoveIcon from '@components/RemoveIcon'

const ANIMATION_DURATION = 200

const Header = styled.header`
  padding: ${theme.spacing.xxlarge}px;
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
  border: 1px solid ${theme.colors.gray[5]};
  border-radius: ${theme.spacing.xsmall}px;
  transition: box-shadow ${ANIMATION_DURATION}ms ease-in-out;
  transition: border ${ANIMATION_DURATION}ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.elevations.medium};
    border: 2px solid ${theme.colors.primary[2]};
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

export default function Profile() {
  const { userBoards } = useAuth()

  return (
    <Page>
      <Container fluid>
        <Header>
          <Text.H1>Seus boards</Text.H1>
        </Header>
        <BoardsList>
          {userBoards &&
            userBoards.map(({ id, name }) => (
              <Row key={id}>
                <Col xxs={12} lg-start={5} lg={4}>
                  <BoardListItem>
                    <Link to={`/board/${id}`}>
                      <Text>{name}</Text>
                    </Link>
                    <RemoveIcon
                      className="delete-icon"
                      width={20}
                      height={20}
                      onClick={() => removeBoardById(id)}
                    />
                  </BoardListItem>
                </Col>
              </Row>
            ))}
        </BoardsList>
      </Container>
    </Page>
  )
}
