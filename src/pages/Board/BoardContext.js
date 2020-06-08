import React from 'react'

export const BoardContext = React.createContext()

export const BoardProvider = ({ children, value }) => (
  <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
)

export default () => React.useContext(BoardContext)
