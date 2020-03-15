import React from 'react'
import { useHistory } from 'react-router-dom'

import { generateNewBoardHash } from '@services/api'

export default function Welcome() {
  const history = useHistory()

  const createNewBoard = async () => {
    const hash = await generateNewBoardHash()
    history.push(`/board/${hash}`)
  }

  return (
    <>
      <div>Welcome Page</div>
      <button onClick={createNewBoard}>Create new board</button>
    </>
  )
}
