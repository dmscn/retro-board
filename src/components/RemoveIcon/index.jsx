import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { Trash2 } from 'react-feather'

const RemoveIcon = styled(Trash2)`
  color: ${theme.colors.stamina};
  cursor: pointer;
  border-radius: 100%;
  padding: ${theme.spacing.xsmall}px;

  &:hover {
    color: ${theme.colors.feedback.attention.dark};
    background-color: ${theme.colors.feedback.attention.light};
  }
`

export default RemoveIcon
