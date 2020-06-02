import React from 'react'
import styled from 'styled-components'
import { theme, Text, Tag, Input } from '@gympass/yoga'
import { MessageCircle, ThumbsUp, PlusCircle } from 'react-feather'

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: ${theme.spacing.huge}px;
  padding: ${theme.spacing.small}px;
  border-radius: ${theme.spacing.xxsmall}px;

  background-color: ${theme.colors.white};

  &: not(: last-child) {
    margin-bottom: ${theme.spacing.medium}px;
  }
`

const ActionRow = styled.footer`
  display: flex;
  justify-content: flex-end;
`

const CounterText = styled(Text.Small)`
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
  const labels = ['label 1', 'label 2', 'label 3', 'label 4']
  return (
    <CardWrapper>
      <LabelRow>
        {labels.map(label => (
          <Label key={label} icon={false}>
            {label}
          </Label>
        ))}
        <AddButton>
          <PlusCircle width={20} />
        </AddButton>
      </LabelRow>

      <Title>Card title</Title>
      <Description>
        Nulla sit officia id sit dolor exercitation ut reprehenderit occaecat
        proident minim sit incididunt laborum. Enim aliquip velit ut sunt enim
        enim. Nulla deserunt anim dolor labore enim ad ut dolor. Occaecat Lorem
        officia sunt officia exercitation labore ex sint dolor aliquip dolor
        nisi.
      </Description>

      <ActionRow>
        <IconWrapper>
          <ThumbsUp />
          <CounterText>200</CounterText>
        </IconWrapper>
        <IconWrapper>
          <MessageCircle />
          <CounterText>10</CounterText>
        </IconWrapper>
      </ActionRow>

      <CommentInput full label="Add a comment..." />
    </CardWrapper>
  )
}
