import React from 'react'
import styled from 'styled-components'
import { theme } from '@gympass/yoga'

export default styled(({ picture, ...props }) => (
  <img src={picture} {...props} />
))`
  display: flex;
  height: ${theme.spacing.xxlarge}px;
  width: ${theme.spacing.xxlarge}px;
  border: 2px solid
    ${props => props?.color || theme.colors.elements.lineAndBorders(props)};
  border-radius: 100%;
  cursor: pointer;
`
