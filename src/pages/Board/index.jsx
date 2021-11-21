import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme, Text, Input, Button, Box } from '@gympass/yoga'
import { Edit } from '@gympass/yoga-icons'
import { BoardProvider } from '@contexts/board'
import {
  subscribeToBoard,
  updateBoardById,
  followBoard,
  unfollowBoard,
  getOnlineUsersInBoard,
} from '@services/firebase'

import Page from '@components/Page'
import Scrollbar from '@components/Scrollbar'
import ColumnsList from './ColumnsList'
import OnlineUsersRow from './OnlineUsersRow'
import useUnload from '@hooks/useUnload'

const ScrollbarWithPadding = styled(Scrollbar)`
  padding: ${theme.spacing.medium}px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-top: ${theme.spacing.medium}px;
  padding: 0 ${theme.spacing.large}px;
`

const CustomButton = styled(Button)`
  margin-left: ${theme.spacing.small}px;
`

const EditBoard = ({ initialValue, onSubmit }) => {
  const [boardName, setBoardName] = React.useState(initialValue)

  return (
    <React.Fragment>
      <Input
        label=""
        value={boardName}
        onChange={e => setBoardName(e.target.value)}
        onClean={() => setBoardName('')}
      />
      <CustomButton onClick={() => onSubmit(boardName)}>Enviar</CustomButton>
    </React.Fragment>
  )
}

const DisplayBoardName = ({ boardName, onEditButtonClick }) => (
  <Box display="flex" alignItems="center">
    <Text.H3>{boardName}</Text.H3>
    <Button.Icon icon={Edit} onClick={onEditButtonClick} inverted />
  </Box>
)

export default function Board() {
  const [board, setBoard] = React.useState(null)
  const { slug } = useParams()
  const [isEditing, setIsEditing] = React.useState(false)
  const [onlineUsers, setOnlineUsers] = React.useState([])

  React.useEffect(() => {
    followBoard(slug)

    return subscribeToBoard(slug, setBoard)
  }, [])

  useUnload(() => unfollowBoard(slug))

  React.useEffect(() => {
    let isMounted = true

    getOnlineUsersInBoard(slug).then(
      users => isMounted && setOnlineUsers(users)
    )

    return () => (isMounted = false)
  }, [board?.onlineUsers])

  const updateBoardName = async boardName => {
    setIsEditing(false)
    if (!boardName) return
    await updateBoardById(slug, { name: boardName })
  }

  return (
    <Page>
      {board && (
        <>
          <OnlineUsersRow onlineUsers={onlineUsers} boardName={board.name} />
          <Header>
            {isEditing ? (
              <EditBoard initialValue={board.name} onSubmit={updateBoardName} />
            ) : (
              <DisplayBoardName
                boardName={board.name}
                onEditButtonClick={() => setIsEditing(true)}
              />
            )}
          </Header>
        </>
      )}
      <BoardProvider slug={slug}>
        <ScrollbarWithPadding horizontal>
          <ColumnsList />
        </ScrollbarWithPadding>
      </BoardProvider>
    </Page>
  )
}
