import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;
  font-size: ${RFValue(14)}px;
  font-family: Verdana;
  color: #666360 ;
  background-color: #B5D1EB; 
  border-radius: 5px;
  margin-bottom: 8px;
  
`