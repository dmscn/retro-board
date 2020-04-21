import styled from 'styled-components'

export const ViewportLane = styled.main`
  width: 100%;
  height: 100%;

  ${({
    theme: {
      yoga: { colors },
    },
  }) => `
    background: ${colors.secondary[0]}
  `}
`
