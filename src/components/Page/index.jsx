import React from 'react'
import styled from 'styled-components'
import NavBar from '@components/NavBar'

const PageContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function Page({ inverted, children }) {
  return (
    <PageContainer>
      <NavBar inverted={inverted} />
      {children}
    </PageContainer>
  )
}
