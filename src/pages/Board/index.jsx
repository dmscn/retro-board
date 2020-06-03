import React from 'react'
import { useParams } from 'react-router-dom'
import Page from '@components/Page'
import BoardColumn from './BoardColumn'
import { theme } from '@gympass/yoga'
import styled from 'styled-components'
import { PlusCircle } from 'react-feather'

const ListWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: auto;
`

const AddNewColumn = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${theme.colors.gray[1]};
  cursor: pointer;

  transition-property: color;
  transition-duration: 300ms;

  &:hover {
    color: ${theme.colors.primary[1]};
  }
`

const ColumnsList = ({ columns }) => (
  <ListWrapper>
    {columns.map(({ id, title, cards }, index) => (
      <BoardColumn key={id} title={title} cards={cards} active={index === 0} />
    ))}
    <AddNewColumn>
      <PlusCircle width={80} height={80} />
    </AddNewColumn>
  </ListWrapper>
)

export default function Board() {
  const { slug } = useParams()
  const cards = [
    { id: 42, title: 'Card A', cards: [] },
    { id: 43, title: 'Card B', cards: [] },
    { id: 44, title: 'Card C', cards: [] },
  ]
  const columns = [
    { id: 42, title: 'Went well', cards: cards },
    { id: 43, title: 'Went bad', cards: [] },
    { id: 44, title: 'Action points', cards: [] },
  ]

  return (
    <Page>
      <div>hello from board slug: {slug}</div>
      {columns && <ColumnsList columns={columns} />}
    </Page>
  )
}
