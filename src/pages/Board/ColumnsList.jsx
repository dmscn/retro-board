import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { PlusCircle } from 'react-feather'
import { ColumnProvider } from '@contexts/column'
import { useBoard } from '@contexts/board'

import {
  subscribeColumnCards,
  addNewCardToBoardColumn,
} from '@services/firebase'

import BoardColumn from './BoardColumn'
import AddColumnModal from './AddColumnModal'

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

export default function ColumnsList() {
  const { slug, columns, removeColumn } = useBoard()

  const [isModalOpen, setModalOpen] = React.useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <ListWrapper>
      {columns.map(({ id, title }, index) => (
        <ColumnProvider key={id} value={{ slug: id }}>
          <BoardColumn
            title={title}
            active={index === 0}
            onRemove={() => removeColumn(id)}
            subscribeCards={callback =>
              subscribeColumnCards(slug, id, callback)
            }
            onAddNewCard={card => addNewCardToBoardColumn(slug, id, card)}
          />
        </ColumnProvider>
      ))}
      <AddNewColumn onClick={toggleModal}>
        <PlusCircle width={80} height={80} />
      </AddNewColumn>
      {isModalOpen && <AddColumnModal onClose={toggleModal} />}
    </ListWrapper>
  )
}
