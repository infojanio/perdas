import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { useTheme } from 'styled-components/native';

//import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.View`
flex: 1;
background-color: #ffff;
`

export const Header = styled.View`
width: 100%;

justify-content: first baseline;
align-items: center;
background-color: #ffff;
padding: 0px 16px;
`
export const Title = styled.Text`
font-size: ${RFValue(14)}px;
font-family: Verdana;
color: #000000;
font-style: normal;
font-weight: bold;
`
export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  
  justify-content: space-between;
`
export const Fields = styled.View`
`

export const Box = styled.FlatList`
 border-width: 1;
    border-color: '#fff';
    border-radius: 8;
    margin-bottom: 8;
    background-color: '#fff';
    padding: 5px 12px;
    height: 56;
`

