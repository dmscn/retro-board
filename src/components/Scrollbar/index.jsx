import styled, { css } from 'styled-components'

const Scrollbar = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  ${({ vertical, horizontal, both }) => css`
    overflow-y: ${(both || vertical) && 'auto'};
    overflow-x: ${(both || horizontal) && 'auto'};
  `}
`

export default Scrollbar
