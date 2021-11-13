import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import tokens from '@gympass/yoga-tokens'

import Avatar from '@components/Avatar'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: ${theme.spacing.xxsmall}px ${theme.spacing.medium}px;
  background-color: ${theme.colors.elements.backgroundAndDisabled};

  .user-avatar {
    margin-right: ${theme.spacing.xxsmall}px;
  }
`

export default function OnlineUsersRow({ onlineUsers = [] }) {
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
    </Wrapper>
  )
}
