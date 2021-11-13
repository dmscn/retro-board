import React from 'react'
import styled from 'styled-components'
import { theme, Button, Box } from '@gympass/yoga'
import { ShareAndroid } from '@gympass/yoga-icons'
import tokens from '@gympass/yoga-tokens'

import Avatar from '@components/Avatar'
import ShareDialog from './ShareDialog'

const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: ${theme.spacing.xxsmall}px ${theme.spacing.medium}px;
  background-color: ${theme.colors.elements.backgroundAndDisabled};

  .user-avatar {
    margin-right: ${theme.spacing.xxsmall}px;
  }
`

export default function OnlineUsersRow({ onlineUsers = [] }) {
  const [isShareDialogOpen, setIsShareDialogOpen] = React.useState(false)
  const toggleShareDialog = () => setIsShareDialogOpen(s => !s)

  return (
    <Wrapper>
      {onlineUsers.map(user => (
        <Avatar
          key={user.id}
          className="user-avatar"
          picture={user.photoURL}
          color={tokens.colors.success}
        />
      ))}
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="flex-end"
        margin-left={tokens.spacing.xxxsmall}
      >
        <Button.Icon icon={ShareAndroid} small onClick={toggleShareDialog} />
      </Box>
      {isShareDialogOpen && <ShareDialog onClose={toggleShareDialog} />}
    </Wrapper>
  )
}
