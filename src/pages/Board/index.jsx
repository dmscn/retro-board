import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { PlusCircle } from 'react-feather'

import Page from '@components/Page'
import Scrollbar from '@components/Scrollbar'
import BoardColumn from './BoardColumn'
import AddCardModal from './AddCardModal'
import { BoardProvider } from './BoardContext'

const ScrollbarWithPadding = styled(Scrollbar)`
  padding: ${theme.spacing.medium}px;
`

const ListWrapper = styled.section`
  display: inline-flex;
  height: 100%;
`

const AddNewColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: calc(${theme.spacing.huge}px * 5);
  color: ${theme.colors.gray[2]};
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
  const [isModalOpen, setIsModalOpen] = React.useState(false)

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

  const toggleModal = () => setIsModalOpen(prev => !prev)

  return (
    <BoardProvider
      value={{
        isAddNewCardModalOpen: isModalOpen,
        toggleAddNewCardModal: toggleModal,
      }}
    >
      <Page>
        <ScrollbarWithPadding horizontal>
          <ColumnsList columns={columns} />
        </ScrollbarWithPadding>
        {isModalOpen && <AddCardModal />}
      </Page>
    </BoardProvider>
  )
}
