import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { PlusCircle } from 'react-feather'

import { getBoardById } from '@services/firebase'

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

const ColumnsList = ({ columns, onAddNewColumn }) => (
  <ListWrapper>
    {columns.map(({ id, title, cards }, index) => (
      <BoardColumn key={id} title={title} cards={cards} active={index === 0} />
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
    getBoardById(slug).then(doc => {
      if (doc.exists) {
        const { columns = [] } = doc.data()
        setColumns(columns)
      }
    })
  }, [])

  return (
    <Page>
      <ScrollbarWithPadding horizontal>
        <ColumnsList columns={columns} onAddNewColumn={toggleModal} />
      </ScrollbarWithPadding>
      {isModalOpen && <AddColumnModal onCancel={toggleModal} />}
    </Page>
  )
}
