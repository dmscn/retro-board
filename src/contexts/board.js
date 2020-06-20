import React from 'react'

const BoardContext = React.createContext()

export const BoardProvider = ({ children, value }) => (
  <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
)

export const useBoard = () => React.useContext(BoardContext)
