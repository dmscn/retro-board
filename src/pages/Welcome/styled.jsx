import styled from 'styled-components'
import { Row, Button, theme } from '@gympass/yoga'

export const ViewportLane = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      yoga: { colors },
    },
  }) => `
    background: ${colors.energy[0]}
  `}
`
export const CenteredRow = styled(Row)`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  text-align: center;
`
export const IllustrationWrapper = styled(CenteredRow)`
  margin: 48px 0;
`

export const ButtonsRow = styled(CenteredRow)`
  .with-margin {
    margin-right: ${theme.spacing.medium}px;
  }
`

export const FixedWidthButton = styled(Button.Outline)`
  width: calc(${theme.spacing.huge}px * 2);
`
