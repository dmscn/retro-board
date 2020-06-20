import React from 'react'

const CardContext = React.createContext()

export const CardProvider = ({ children, value }) => (
  <CardContext.Provider value={value}>{children}</CardContext.Provider>
)

export const useCard = () => React.useContext(CardContext)
