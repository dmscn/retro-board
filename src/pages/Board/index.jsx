import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme, Text, Input, Button } from '@gympass/yoga'
import { BoardProvider } from '@contexts/board'
import { getBoardById } from '@services/firebase'
import { Edit2 } from 'react-feather'

import Page from '@components/Page'
import Scrollbar from '@components/Scrollbar'
import ColumnsList from './ColumnsList'

const ANIMATION_DURATION = 200

const ScrollbarWithPadding = styled(Scrollbar)`
  padding: ${theme.spacing.medium}px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.large}px;
`

const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.small}px;
  margin-left: ${theme.spacing.medium}px;
  border-radius: 100%;
  overflow: hidden;
  background-color: 'transparent';
  color: ${theme.colors.dark};
  cursor: pointer;
  transition-duration: ${ANIMATION_DURATION}ms;
  transition-property: color, background-color;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary[0]};
    color: ${theme.colors.primary[3]};
  }
`

const CustomButton = styled(Button)`
  margin-left: ${theme.spacing.small}px;
`

const EditBoard = ({ initialValue, onSubmit, onClean }) => {
  const [boardName, setBoardName] = React.useState(initialValue)

  return (
    <React.Fragment>
      <Input
        label=""
        value={boardName}
        onChange={e => setBoardName(e.target.value)}
        onClean={onClean}
      />
      <CustomButton onClick={() => onSubmit(boardName)}>Enviar</CustomButton>
    </React.Fragment>
  )
}

const DisplayBoardName = ({ boardName, onEditButtonClick }) => (
  <React.Fragment>
    <Text.H1>{boardName}</Text.H1>
    <EditWrapper onClick={onEditButtonClick}>
      <Edit2 width={20} height={20} />
    </EditWrapper>
  </React.Fragment>
)

export default function Board() {
  const [board, setBoard] = React.useState(null)
  const { slug } = useParams()
  const [isEditing, setIsEditing] = React.useState(false)

  React.useEffect(() => {
    let isMounted = true
    getBoardById(slug).then(board => isMounted && setBoard(board))

    return () => (isMounted = false)
  }, [])

  const updateBoardName = boardName => {
    if (!boardName || boardName === board.name) return
    console.log(boardName)
  }

  return (
    <Page>
      {board && (
        <Header>
          {isEditing ? (
            <EditBoard
              initialValue={board.name}
              onSubmit={updateBoardName}
              onClean={() => setIsEditing(false)}
            />
          ) : (
            <DisplayBoardName
              boardName={board.name}
              onEditButtonClick={() => setIsEditing(true)}
            />
          )}
        </Header>
      )}
      <BoardProvider slug={slug}>
        <ScrollbarWithPadding horizontal>
          <ColumnsList />
        </ScrollbarWithPadding>
      </BoardProvider>
    </Page>
  )
}
