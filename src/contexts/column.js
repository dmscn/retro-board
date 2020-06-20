import React from 'react'

const ColumnContext = React.createContext()

export const ColumnProvider = ({ children, value }) => (
  <ColumnContext.Provider value={value}>{children}</ColumnContext.Provider>
)

export const useColumn = () => React.useContext(ColumnContext)
