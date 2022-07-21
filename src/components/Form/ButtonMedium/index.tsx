import React from 'react'
import { Container, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  title: string
  onPress: () => void
}

export function ButtonMedium({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}