import React from 'react'
import styled, { css } from 'styled-components'
import { theme, Text, Button } from '@gympass/yoga'
import Card from './Card'
import { PlusCircle } from 'react-feather'

const graySpacerStyle = css`
  padding: ${theme.spacing.small}px;
  background-color: ${theme.colors.gray[1]};
  margin-bottom: ${theme.spacing.small}px;
`

const ColumnWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const Header = styled.article`
  ${graySpacerStyle}
  border-bottom: ${({ active, theme }) =>
    active && `2px solid ${theme.colors.primary[1]}`};
`

const HeaderText = styled(Text.H4)`
  text-align: center;
`

const Content = styled.main`
  ${graySpacerStyle}
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default function BoardColumn({ title, cards, active }) {
  return (
    <ColumnWrapper>
      <Header as="header" active={active}>
        <HeaderText>{title}</HeaderText>
      </Header>

      <Content>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
        <Button.Text inverted onClick={console.log}>
          <PlusCircle />
        </Button.Text>
      </Content>
    </ColumnWrapper>
  )
}
