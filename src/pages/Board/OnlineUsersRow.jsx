import React from 'react'
import styled from 'styled-components'
import { theme, Button, Box } from '@gympass/yoga'
import { ShareAndroid, Download } from '@gympass/yoga-icons'
import tokens from '@gympass/yoga-tokens'

import Avatar from '@components/Avatar'
import ShareDialog from './ShareDialog'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.medium}px;
  width: 100%;
  padding: ${theme.spacing.xxsmall}px ${theme.spacing.medium}px;
  background-color: ${theme.colors.elements.backgroundAndDisabled};

  .user-avatar {
    margin-right: ${theme.spacing.xxsmall}px;
  }
`

export default function OnlineUsersRow({ onlineUsers = [], boardName, slug }) {
  const [isShareDialogOpen, setIsShareDialogOpen] = React.useState(false)
  const toggleShareDialog = () => setIsShareDialogOpen(s => !s)
  const history = useHistory()

  const openPDFPreviewInNewTab = () =>
    history.push({ pathname: '/export/preview', state: { boardName, slug } })

  return (
    <Wrapper>
      <Box display="flex" flexDirection="row">
        {onlineUsers.map(user => (
          <Avatar
            key={user.id}
            className="user-avatar"
            picture={user.photoURL}
            style={{ cursor: 'default' }}
          />
        ))}
      </Box>
      <Box
        display="flex"
        flexGrow={1}
        alignItems="center"
        justifyContent="flex-end"
        margin-left={tokens.spacing.xxxsmall}
        gap="xxsmall"
      >
        <Button icon={Download} small onClick={openPDFPreviewInNewTab}>
          Exportar PDF
        </Button>
        <Button icon={ShareAndroid} small onClick={toggleShareDialog}>
          Compartilhar
        </Button>
      </Box>
      {isShareDialogOpen && <ShareDialog onClose={toggleShareDialog} />}
    </Wrapper>
  )
}
