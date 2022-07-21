import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  width: 80%;
  height: 35%;
  background-color: #50c2c9;
  border-radius: 8px;
  align-items: center;
  padding: 10px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;
`
