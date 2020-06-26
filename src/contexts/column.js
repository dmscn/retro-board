import React from 'react'
import { useBoard } from '@contexts/board'
import {
  subscribeColumnCards,
  addNewCardToBoardColumn,
  removeCardFromBoardColumn,
} from '@services/firebase'

const ColumnContext = React.createContext()

export function ColumnProvider({ children, column }) {
  const { slug: boardSlug } = useBoard()
  const [cards, setCards] = React.useState([])

  const withBoardAndColumn = fn => (...args) =>
    fn(boardSlug, column.id, ...args)

  React.useEffect(() => {
    const subscribeCards = withBoardAndColumn(subscribeColumnCards)
    return subscribeCards(setCards)
  }, [])

  const addCard = withBoardAndColumn(addNewCardToBoardColumn)
  const removeCard = withBoardAndColumn(removeCardFromBoardColumn)

  const contextValue = {
    slug: column.id,
    column,
    cards,
    addCard,
    removeCard,
  }

  return (
    <ColumnContext.Provider value={contextValue}>
      {children}
    </ColumnContext.Provider>
  )
}

export const useColumn = () => React.useContext(ColumnContext)
