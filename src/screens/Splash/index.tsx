import * as React from 'react'

import { Logo } from '../../components/Logo'
import { ButtonMedium } from '../../components/Form/ButtonMedium'

import LogoSvg from '../../assets/torneira/torneira.svg'
import LogoSvg2 from '../../assets/logo/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'

import {
  TitleWrapper,
  Title,
  Container,
  SubTitle,
  ButtonNext,
  SubLogo,
} from './styles'

export default function Splash() {
  function handleNext() {
    console.log('próxima tela')
  }

  return (
    <Container>
      <Logo />

      <TitleWrapper>
        <LogoSvg width={RFValue(160)} height={RFValue(160)} />

        <Title>
          Combate às perdas {'\n'}
          de água na distribuição.
        </Title>
      </TitleWrapper>

      <SubLogo>
        <SubTitle>
          Utilize o aplicativo para nos enviar a localização do vazamento de
          água.
        </SubTitle>
        <LogoSvg2 width={RFValue(160)} height={RFValue(160)} />
      </SubLogo>

      <ButtonNext>
        <ButtonMedium title="Próximo" onPress={handleNext} />
      </ButtonNext>
    </Container>
  )
}