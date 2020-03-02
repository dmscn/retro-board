import React from 'react'
import { useParams } from 'react-router-dom'

export default function Board() {
  const { slug } = useParams()
  return <div>hello from board slug: {slug}</div>
}
