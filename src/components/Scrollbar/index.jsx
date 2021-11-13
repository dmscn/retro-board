import styled, { css } from 'styled-components'
import hexToRgb from '@utils/hexToRgb'
import { theme } from '@gympass/yoga'

const customScrollbarCss = css`
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px
      ${props => hexToRgb(theme.colors.stamina(props), 0.5)};
    background-color: ${theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: ${theme.colors.primary[0]};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary[3]};
  }
`

const Scrollbar = styled.div`
  ${customScrollbarCss};
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  ${({ vertical, horizontal, both }) => css`
    overflow-y: ${(both || vertical) && 'auto'};
    overflow-x: ${(both || horizontal) && 'auto'};
  `}
`

export default Scrollbar
