import styled from 'styled-components'
import { theme } from '@gympass/yoga'
import { Trash2 } from 'react-feather'

const RemoveIcon = styled(Trash2)`
  color: ${theme.colors.dark};
  cursor: pointer;
  border-radius: 100%;
  padding: ${theme.spacing.xsmall}px;

  &:hover {
    color: ${theme.colors.negative[1]};
    background-color: ${theme.colors.negative[0]};
  }
`

export default RemoveIcon
