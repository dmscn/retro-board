import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { PlusCircle } from 'react-feather'
import { BoardProvider } from '@contexts/board'
import { ColumnProvider } from '@contexts/column'

import {
  subscribeBoardColumns,
  subscribeColumnCards,
  addNewColumnToBoard,
  removeColumnFromBoard,
  addNewCardToBoardColumn,
} from '@services/firebase'

import Page from '@components/Page'
import Scrollbar from '@components/Scrollbar'
import BoardColumn from './BoardColumn'
import AddColumnModal from './AddColumnModal'

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

const ColumnsList = ({
  boardSlug,
  columns,
  onAddNewColumn,
  onColumnRemove,
}) => (
  <ListWrapper>
    {columns.map(({ id, title }, index) => (
      <ColumnProvider key={id} value={{ columnSlug: id }}>
        <BoardColumn
          title={title}
          active={index === 0}
          onRemove={() => onColumnRemove(id)}
          subscribeCards={callback =>
            subscribeColumnCards(boardSlug, id, callback)
          }
          onAddNewCard={card => addNewCardToBoardColumn(boardSlug, id, card)}
        />
      </ColumnProvider>
    ))}
    <AddNewColumn onClick={onAddNewColumn}>
      <PlusCircle width={80} height={80} />
    </AddNewColumn>
  </ListWrapper>
)

export default function Board() {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  const [columns, setColumns] = React.useState([])
  const { slug } = useParams()

  React.useEffect(() => {
    subscribeBoardColumns(slug, setColumns)
  }, [])

  const addNewColumn = title => {
    addNewColumnToBoard(slug, { title })
    toggleModal()
  }

  const handleColumnRemove = columnId => removeColumnFromBoard(slug, columnId)

  return (
    <Page>
      <BoardProvider value={{ boardSlug: slug }}>
        <ScrollbarWithPadding horizontal>
          <ColumnsList
            boardSlug={slug}
            columns={columns}
            onAddNewColumn={toggleModal}
            onColumnRemove={handleColumnRemove}
          />
        </ScrollbarWithPadding>
        {isModalOpen && (
          <AddColumnModal onCancel={toggleModal} onSubmit={addNewColumn} />
        )}
      </BoardProvider>
    </Page>
  )
}
