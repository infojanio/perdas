import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
`

export const Image = styled.Image`
  height: 140;
  width: 140;
  margin-top: 60;
  align-items: 'center';
  justify-content: 'center';
`
export const TitleWrapper = styled.View`
  align-items: center;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(26)}px;
  text-align: center;
  text-align: center;
  margin-top: 30px;
`
export const SubTitle = styled.Text`
  width: 90%;
  justify-content: center;
  text-align: center;
  margin-bottom: 87px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  margin-bottom: 15px;
`
export const SubLogo = styled.View`
  justify-content: center;
  align-items: center;
`

export const ButtonNext = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`