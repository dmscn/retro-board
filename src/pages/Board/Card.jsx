import React from 'react'
import styled from 'styled-components'
import { theme, Text, Tag, Input, Box } from '@gympass/yoga'
import {
  MessageCircle,
  ThumbsUp,
  Plus,
  ChevronUp,
  ChevronDown,
} from 'react-feather'

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
    liked && `color: ${theme.colors.secondary(props)};`}
  margin-left: ${theme.spacing.xsmall}px;
`

const Label = styled(Tag)`
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: ${theme.spacing.xxsmall}px;
  cursor: pointer;
  ${({ liked, ...props }) =>
    liked && `color: ${theme.colors.secondary(props)};`}

  &:not(:last-child) {
    margin-right: ${theme.spacing.small}px;
  }
`

const ButtonContent = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Text.H3)`
  margin: ${theme.spacing.xsmall}px 0;
`
const Description = styled(Text.Small)`
  margin-bottom: ${theme.spacing.medium}px;
`

const CommentListItem = styled.li`
  padding: ${theme.spacing.medium}px;
  margin: ${theme.spacing.small}px 0;
  background-color: ${theme.colors.elements.backgroundAndDisabled};
  border-radius: ${theme.spacing.xxsmall}px;
`

const CommentInput = styled(Input)`
  margin-top: ${theme.spacing.small}px;
`

const SeeMoreComments = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.primary[3]};
`

const AddLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${theme.colors.primary[3]};
  cursor: pointer;

  .icon {
    margin-right: ${theme.spacing.xxsmall}px;
  }
`

const CommentsList = ({ comments }) => {
  const [displayAll, setDisplayAll] = React.useState(false)
  const toggleComments = () => setDisplayAll(prev => !prev)

  return (
    <ul>
      {comments
        .map(comment => (
          <CommentListItem key={comment}>
            <Text.Small>{comment}</Text.Small>
          </CommentListItem>
        ))
        .slice(0, displayAll ? comments.length : 3)}

      {comments.length > 3 && (
        <SeeMoreComments variant="primary" onClick={() => toggleComments()}>
          {displayAll ? (
            <React.Fragment>
              <ChevronUp width={20} />
              <Text.H4 variant="primary">ver menos</Text.H4>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ChevronDown width={20} />
              <Text.H4 variant="primary">ver mais</Text.H4>
            </React.Fragment>
          )}
        </SeeMoreComments>
      )}
    </ul>
  )
}

export default function Card() {
  const { slug, card, like, liked, addLabel, addComment } = useCard()
  const { removeCard } = useColumn()
  const { title, labels = [], description, likedBy = [], comments = [] } = card

  const [isModalOpen, setModalOpen] = React.useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  const [comment, setComment] = React.useState('')
  const addNewComment = () => {
    addComment(comment)
    setComment('')
  }

  return (
    <CardWrapper>
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
      <Box display="flex" flexWrap="wrap" gap="xxsmall" alignItems="center">
        {labels.map(label => (
          <Label key={label} icon={false} variant="secondary">
            {label}
          </Label>
        ))}
        <AddLabel onClick={toggleModal}>
          <ButtonContent>
            <Plus className="icon" width={14} />
            <Text.Small variant="primary">adicionar categoria</Text.Small>
          </ButtonContent>
        </AddLabel>
      </Box>

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
      <CommentsList comments={comments} />
      <form onSubmit={addNewComment}>
        <CommentInput
          full
          label=""
          placeholder="Add a comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          cleanable={false}
        />
      </form>
      {isModalOpen && (
        <AddLabelModal onClose={toggleModal} onSubmit={addLabel} />
      )}
    </CardWrapper>
  )
}
