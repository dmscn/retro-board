import React from 'react'
import { useBoard } from './board'
import { useColumn } from './column'
import {
  addNewCardLabel,
  addNewCardComment,
  likeCard,
  unlikeCard,
  getCurrentUser,
} from '@services/firebase'

const CardContext = React.createContext()

export function CardProvider({ children, card }) {
  const { slug: boardSlug } = useBoard()
  const { slug: columnSlug } = useColumn()

  const liked = card.likedBy.includes(getCurrentUser().uid)

  const withSlugs = fn => (...args) =>
    fn(boardSlug, columnSlug, card.id, ...args)

  const like = liked ? withSlugs(unlikeCard) : withSlugs(likeCard)
  const addLabel = withSlugs(addNewCardLabel)
  const addComment = withSlugs(addNewCardComment)

  const contextValues = {
    slug: card.id,
    card,
    addLabel,
    addComment,
    like,
    liked,
  }

  return (
    <CardContext.Provider value={contextValues}>
      {children}
    </CardContext.Provider>
  )
}

export const useCard = () => React.useContext(CardContext)
