import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import tokens from '@gympass/yoga-tokens'

import Avatar from '@components/Avatar'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: ${theme.spacing.xxsmall}px ${theme.spacing.medium}px;
  background-color: ${theme.colors.gray[1]};

  .user-avatar {
    margin-right: ${theme.spacing.xxsmall}px;
  }
`

export default function OnlineUsersRow(/*{ loggedUsers = [] }*/) {
  return (
    <Wrapper>
      {/* {loggedUsers.map(user => (
        <Avatar key={user.uid} picture={user.picture} />
      ))} */}
      <Avatar
        className="user-avatar"
        picture="https://i.pravatar.cc/300?img=1"
        color={tokens.colors.positive[0]}
      />
      <Avatar
        className="user-avatar"
        picture="https://i.pravatar.cc/300?img=2"
        color={tokens.colors.positive[0]}
      />
      <Avatar
        className="user-avatar"
        picture="https://i.pravatar.cc/300?img=3"
        color={tokens.colors.positive[0]}
      />
      <Avatar
        className="user-avatar"
        picture="https://i.pravatar.cc/300?img=4"
        color={tokens.colors.positive[0]}
      />
    </Wrapper>
  )
}
