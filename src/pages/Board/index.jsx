import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme, Text } from '@gympass/yoga'
import { BoardProvider } from '@contexts/board'
import { getBoardById } from '@services/firebase'
import { Edit2 } from 'react-feather'

import Page from '@components/Page'
import Scrollbar from '@components/Scrollbar'
import ColumnsList from './ColumnsList'

const ANIMATION_DURATION = 200

const ScrollbarWithPadding = styled(Scrollbar)`
  padding: ${theme.spacing.medium}px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.large}px;
`

const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.small}px;
  margin-left: ${theme.spacing.medium}px;
  border-radius: 100%;
  overflow: hidden;
  background-color: 'transparent';
  color: ${theme.colors.dark};
  cursor: pointer;
  transition-duration: ${ANIMATION_DURATION}ms;
  transition-property: color, background-color;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary[0]};
    color: ${theme.colors.primary[3]};
  }
`

export default function Board() {
  const [board, setBoard] = React.useState(null)
  const { slug } = useParams()

  React.useEffect(() => {
    let isMounted = true
    getBoardById(slug).then(board => isMounted && setBoard(board))

    return () => (isMounted = false)
  }, [])

  return (
    <Page>
      {board && (
        <Header>
          <Text.H1>{board.name}</Text.H1>
          <EditWrapper>
            <Edit2 width={20} height={20} />
          </EditWrapper>
        </Header>
      )}
      <BoardProvider slug={slug}>
        <ScrollbarWithPadding horizontal>
          <ColumnsList />
        </ScrollbarWithPadding>
      </BoardProvider>
    </Page>
  )
}
