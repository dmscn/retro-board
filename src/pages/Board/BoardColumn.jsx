import React from 'react'
import styled, { css } from 'styled-components'
import { theme, Text, Button } from '@gympass/yoga'
import { PlusCircle } from 'react-feather'
import Card from './Card'
import Scrollbar from '@components/Scrollbar'
import AddCardModal from './AddCardModal'

const graySpacerStyle = css`
  box-sizing: border-box;
  padding: ${theme.spacing.small}px;
  background-color: ${theme.colors.gray[1]};
  margin-bottom: ${theme.spacing.small}px;
`

const ColumnWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(${theme.spacing.huge}px * 6);
  margin-right: ${theme.spacing.medium}px;
`

const Header = styled.article`
  box-sizing: border-box;
  ${graySpacerStyle}
  border-bottom: ${({ active, theme }) =>
    active && `2px solid ${theme.colors.primary[1]}`};
`

const HeaderText = styled(Text.H4)`
  text-align: center;
`

const Content = styled.main`
  ${graySpacerStyle}
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
`

export default function BoardColumn({ title, cards, active }) {
  const [isModalOpen, setModalOpen] = React.useState(false)

  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <ColumnWrapper>
      <Header as="header" active={active}>
        <HeaderText>{title}</HeaderText>
      </Header>

      <Scrollbar vertical>
        <Content>
          {cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
          <Button.Text inverted onClick={toggleModal}>
            <PlusCircle />
          </Button.Text>
        </Content>
      </Scrollbar>
      {isModalOpen && <AddCardModal onCancel={toggleModal} />}
    </ColumnWrapper>
  )
}
