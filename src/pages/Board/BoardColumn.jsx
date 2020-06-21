import React from 'react'
import styled, { css } from 'styled-components'
import { theme, Text, Button } from '@gympass/yoga'
import { PlusCircle, Trash2 } from 'react-feather'
import Card from './Card'
import Scrollbar from '@components/Scrollbar'
import AddCardModal from './AddCardModal'
import { CardProvider } from '@contexts/card'
import { useColumn } from '@contexts/column'
import { useBoard } from '@contexts/board'

const ANIMATION_DURATION = 250

const graySpacerStyle = css`
  box-sizing: border-box;
  padding: ${theme.spacing.small}px;
  background-color: ${theme.colors.gray[1]};
  margin-bottom: ${theme.spacing.small}px;
  border-radius: ${theme.spacing.xxsmall}px;
`

const ColumnWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(${theme.spacing.huge}px * 6);
  margin-right: ${theme.spacing.medium}px;
`

const Header = styled.header`
  ${graySpacerStyle}
  box-sizing: border-box;
  position: relative;
  border-bottom: ${({ active, theme }) =>
    active && `2px solid ${theme.colors.primary[1]}`};
  cursor: pointer;

  transition-property: border-color, opacity, background-color;
  transition-duration: ${ANIMATION_DURATION}ms;
  transition-timing-function: ease-in-out;

  &:hover {
    border-color: ${theme.colors.negative[1]};
    background-color: ${theme.colors.negative[0]};
  }

  .delete-icon {
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  }

  &:hover .delete-icon {
    opacity: 1;
  }
`

const HeaderText = styled(Text.H4)`
  text-align: center;
`

const TrashIconWrapper = styled.span`
  position: absolute;
  right: ${theme.spacing.medium}px;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${theme.colors.negative[1]};
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
      <Header active={active} onClick={() => removeColumn(slug)}>
        <HeaderText>{column.title}</HeaderText>
        <TrashIconWrapper className="delete-icon">
          <Trash2 width={20} />
        </TrashIconWrapper>
      </Header>

      <Scrollbar vertical>
        <Content>
          {cards.map(card => (
            <CardProvider key={card.id} card={card}>
              <Card />
            </CardProvider>
          ))}
          <Button.Text inverted onClick={toggleModal}>
            <PlusCircle />
          </Button.Text>
        </Content>
      </Scrollbar>
      {isModalOpen && (
        <AddCardModal onCancel={toggleModal} onSubmit={addCard} />
      )}
    </ColumnWrapper>
  )
}
