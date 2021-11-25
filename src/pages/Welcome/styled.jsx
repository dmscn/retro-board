import styled from 'styled-components'
import { Button, theme } from '@gympass/yoga'

export const FixedWidthButton = styled(Button.Outline)`
  width: calc(${theme.spacing.huge}px * 2);
`
