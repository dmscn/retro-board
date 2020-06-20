import React from 'react'
import {
  subscribeBoardColumns,
  addNewColumnToBoard,
  removeColumnFromBoard,
} from '@services/firebase'

const BoardContext = React.createContext()

export const BoardProvider = ({ children, slug }) => {
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    subscribeBoardColumns(slug, setColumns)
  }, [])

  const addColumn = title => addNewColumnToBoard(slug, { title })
  const removeColumn = columnSlug => removeColumnFromBoard(slug, columnSlug)

  const contextValues = {
    slug,
    columns,
    addColumn,
    removeColumn,
  }

  return (
    <BoardContext.Provider value={contextValues}>
      {children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => React.useContext(BoardContext)
