import React from 'react'
import styled from 'styled-components'
import { theme, Text, Tag, Input } from '@gympass/yoga'
import { MessageCircle, ThumbsUp, PlusCircle } from 'react-feather'

import { useCard } from '@contexts/card'
import { useColumn } from '@contexts/column'

import RemoveIcon from '@components/RemoveIcon'
import AddLabelModal from './AddLabelModal'

const ANIMATION_DURATION = 250

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: ${theme.spacing.huge}px;
  padding: ${theme.spacing.small}px;
  border-radius: ${theme.spacing.xxsmall}px;
  box-shadow: ${theme.elevations.small};

  background-color: ${theme.colors.white};

  &:not(:last-child) {
    margin-bottom: ${theme.spacing.medium}px;
  }

  .delete-icon {
    display: hidden;
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  }

  &:hover .delete-icon {
    display: flex;
    opacity: 1;
  }
`

const ActionRow = styled.footer`
  display: flex;
  justify-content: flex-end;
`

const CounterText = styled(Text.Small)`
  ${({ liked, ...props }) =>
    liked && `color: ${theme.colors.primary(props)[2]};`}
  margin-left: ${theme.spacing.xsmall}px;
`

const Label = styled(Tag)`
  margin-right: ${theme.spacing.xsmall}px;
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: ${theme.spacing.xxsmall}px;
  cursor: pointer;
  ${({ liked, ...props }) =>
    liked && `color: ${theme.colors.primary(props)[2]};`}

  &:not(:last-child) {
    margin-right: ${theme.spacing.small}px;
  }
`

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  padding: 0 ${theme.spacing.xxsmall}px;
  background-color: transparent;
  color: ${theme.colors.gray[4]};
  cursor: pointer;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Text.H3)`
  margin: ${theme.spacing.small}px 0;
`
const Description = styled(Text.Small)`
  margin-bottom: ${theme.spacing.small}px;
`

const CommentInput = styled(Input)`
  margin-top: ${theme.spacing.small}px;
`

export default function Card() {
  const { slug, card, like, liked, addLabel } = useCard()
  const { removeCard } = useColumn()
  const { title, labels = [], description, likedBy = [], comments = [] } = card

  const [isModalOpen, setModalOpen] = React.useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <CardWrapper>
      <LabelRow>
        {labels.map(label => (
          <Label key={label} icon={false}>
            {label}
          </Label>
        ))}
        <AddButton onClick={toggleModal}>
          <PlusCircle width={20} />
        </AddButton>
      </LabelRow>

      <TitleRow>
        <Title>{title} </Title>
        <RemoveIcon
          className="delete-icon"
          width={18}
          height={18}
          onClick={() => removeCard(slug)}
        />
      </TitleRow>
      <Description>{description}</Description>

      <ActionRow>
        <IconWrapper onClick={like} liked={liked}>
          <ThumbsUp />
          <CounterText liked={liked}>{likedBy.length}</CounterText>
        </IconWrapper>
        <IconWrapper>
          <MessageCircle />
          <CounterText>{comments.length}</CounterText>
        </IconWrapper>
      </ActionRow>

      <CommentInput full label="Add a comment..." />
      {isModalOpen && (
        <AddLabelModal onClose={toggleModal} onSubmit={addLabel} />
      )}
    </CardWrapper>
  )
}
