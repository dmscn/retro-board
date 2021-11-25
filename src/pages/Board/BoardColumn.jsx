import React from 'react'
import styled, { css } from 'styled-components'
import { theme, Text, Button, Box } from '@gympass/yoga'
import tokens from '@gympass/yoga-tokens'
import { PlusCircle } from 'react-feather'
import Card from './Card'
import AddCardModal from './AddCardModal'
import { CardProvider } from '@contexts/card'
import { useColumn } from '@contexts/column'
import { useBoard } from '@contexts/board'

import Scrollbar from '@components/Scrollbar'
import RemoveIcon from '@components/RemoveIcon'

const ANIMATION_DURATION = 250

const graySpacerStyle = css`
  box-sizing: border-box;
  padding: ${theme.spacing.small}px;
  background-color: ${theme.colors.elements.backgroundAndDisabled};
  margin-bottom: ${theme.spacing.small}px;
  border-radius: ${theme.spacing.xxsmall}px;
`

const ColumnWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 568px;
  height: 100%;
  max-width: 320px;
  width: calc(${theme.spacing.huge}px * 6);
  margin-right: ${theme.spacing.medium}px;
`

const Header = styled.header`
  ${graySpacerStyle}
  box-sizing: border-box;
  position: relative;
  border-bottom: 2px solid ${theme.colors.primary[3]};

  .delete-icon {
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  }

  &:hover .delete-icon {
    opacity: 1;
  }
`

const IconWrapper = styled.span`
  position: absolute;
  right: ${theme.spacing.medium}px;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Content = styled.main`
  ${graySpacerStyle}
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
`

export default function BoardColumn({ active }) {
  const { removeColumn } = useBoard()
  const { column, slug, cards, addCard } = useColumn()

  const [isModalOpen, setModalOpen] = React.useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <ColumnWrapper>
      <Header active={active}>
        <Box display="flex" justifyContent="center">
          <Text.Medium numberOfLines={1}>{column.title}</Text.Medium>
        </Box>
        <IconWrapper className="delete-icon">
          <RemoveIcon
            height={18}
            width={18}
            onClick={() => removeColumn(slug)}
          />
        </IconWrapper>
      </Header>

      <Scrollbar vertical>
        <Content>
          {cards.map(card => (
            <CardProvider key={card.id} card={card}>
              <Card />
            </CardProvider>
          ))}
          <Button.Text onClick={toggleModal}>
            <PlusCircle color={tokens.colors.clear} />
          </Button.Text>
        </Content>
      </Scrollbar>
      {isModalOpen && (
        <AddCardModal onCancel={toggleModal} onSubmit={addCard} />
      )}
    </ColumnWrapper>
  )
}
