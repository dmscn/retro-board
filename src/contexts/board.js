import React from 'react'
import {
  subscribeBoardColumns,
  addNewColumnToBoard,
  removeColumnFromBoard,
  getBoardById,
} from '@services/firebase'

const BoardContext = React.createContext()

export const BoardProvider = ({ children, slug }) => {
  const [board, setBoard] = React.useState({})
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    subscribeBoardColumns(slug, setColumns)
  }, [])

  React.useEffect(() => {
    let isMounted = true
    getBoardById(slug).then(board => isMounted && setBoard(board))

    return () => (isMounted = false)
  }, [])

  const addColumn = title => addNewColumnToBoard(slug, { title })
  const removeColumn = columnSlug => removeColumnFromBoard(slug, columnSlug)

  const contextValues = {
    slug,
    board,
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
