import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { PlusCircle } from 'react-feather'
import { ColumnProvider } from '@contexts/column'
import { useBoard } from '@contexts/board'

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
  const { columns } = useBoard()

  const [isModalOpen, setModalOpen] = React.useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <ListWrapper>
      {columns.map((column, index) => (
        <ColumnProvider key={column.id} column={column}>
          <BoardColumn active={index === 0} />
        </ColumnProvider>
      ))}
      <AddNewColumn onClick={toggleModal}>
        <PlusCircle width={80} height={80} />
      </AddNewColumn>
      {isModalOpen && <AddColumnModal onClose={toggleModal} />}
    </ListWrapper>
  )
}
