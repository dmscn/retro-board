import { Button, Input, Text } from '@gympass/yoga'
import React from 'react'
import { useParams } from 'react-router-dom'
import * as firebaseService from '../../services/firebase'

const InputComponent = () => {
  const [title, setTitle] = React.useState('')

  const addNewTest = firebaseService.addTo('test')

  const onSubmit = event => {
    event.preventDefault()

    addNewTest({
      title,
      likes: 0,
    }).then(() => {
      setTitle('')
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </div>
  )
}

export default function Board() {
  const { slug } = useParams()
  const [registers, setRegisters] = React.useState([])

  const subscribeToTests = firebaseService.subscribeTo('test')

  React.useEffect(() => {
    subscribeToTests(newDocs => setRegisters(newDocs))
  }, [])

  return (
    <div>
      <div>hello from board slug: {slug}</div>
      {registers.map(({ id, title }) => (
        <div key={id}>
          <Text>{title}</Text>
        </div>
      ))}
      <InputComponent />
    </div>
  )
}
