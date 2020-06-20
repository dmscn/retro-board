import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { BoardProvider } from '@contexts/board'

import Page from '@components/Page'
import Scrollbar from '@components/Scrollbar'
import ColumnsList from './ColumnsList'

const ScrollbarWithPadding = styled(Scrollbar)`
  padding: ${theme.spacing.medium}px;
`

export default function Board() {
  const { slug } = useParams()

  return (
    <Page>
      <BoardProvider slug={slug}>
        <ScrollbarWithPadding horizontal>
          <ColumnsList />
        </ScrollbarWithPadding>
      </BoardProvider>
    </Page>
  )
}
