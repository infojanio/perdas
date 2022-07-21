import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  width: 70%;
  height: 30%;
  background-color: #50C2C9;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const Title = styled.Text`
  font-family: Verdana;
  font-size: ${RFValue(16)}px;
  color: #ffffff;
  font-weight: bold;
`