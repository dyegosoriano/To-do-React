import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Container, LoadingText } from './styles'

export default function Loading() {
  return (
    <Container>
      <LoadingText>Carregando dados...</LoadingText>

      <ActivityIndicator size="small" color="#ff1744" />
    </Container>
  )
}
