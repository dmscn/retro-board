import React from 'react'
import styled, { css } from 'styled-components'
import { theme, Text, Button } from '@gympass/yoga'
import Card from './Card'
import { PlusCircle } from 'react-feather'
import ScrollBar from '@components/ScrollBar'

const graySpacerStyle = css`
  box-sizing: border-box;
  padding: ${theme.spacing.small}px;
  background-color: ${theme.colors.gray[1]};
  margin-bottom: ${theme.spacing.small}px;
`

const ColumnWrapper = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-right: ${theme.spacing.medium}px;
`

const Header = styled.article`
  box-sizing: border-box;
  ${graySpacerStyle}
  border-bottom: ${({ active, theme }) =>
    active && `2px solid ${theme.colors.primary[1]}`}
`

const HeaderText = styled(Text.H4)`
  text-align: center;
`

const Content = styled.main`
  ${graySpacerStyle}
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: calc(100% - ${theme.spacing.small}px);
`

export default function BoardColumn({ title, cards, active }) {
  return (
    <ColumnWrapper>
      <Header as="header" active={active}>
        <HeaderText>{title}</HeaderText>
      </Header>

      <ScrollBar vertical>
        <Content>
          {cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
          <Button.Text inverted onClick={console.log}>
            <PlusCircle />
          </Button.Text>
        </Content>
      </ScrollBar>
    </ColumnWrapper>
  )
}
