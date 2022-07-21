import React from 'react'
import { Control, Controller } from 'react-hook-form'
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useEffect } from 'react';
import axios from 'axios';
//import { useNavigation } from '@react-navigation/native';


import {Container, Header, Title, Form, Fields, Box } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { InputForm } from '../../components/Form/InputForm'

import EventMap from '../EventMap';


interface PickerItem {
  label: string;
  value: string;
}


interface IBGECityResponse {
  nome: string;
}

interface PickerItem {
  label: string;
  value: string;
}

export function Dashboard(){ 
  
  const [ufs, setUfs] = useState<PickerItem[]>([]);
  const [cities, setCities] = useState<PickerItem[]>([]);
  const [selectedUf, setSelectedUf] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  /*
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  }
  */

 
  useEffect(() => {
    if (selectedUf != null) return;

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/52/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => ({
          label: city.nome,
          value: city.nome,
        }));
        setCities(cityNames);
      });
  }, [selectedUf]);


  function handleSubmit() {}

  const pickerSelectStyles = StyleSheet.create({
    viewContainer: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 8,
      marginBottom: 8,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 12,
      height: 56,
    },
    iconContainer: {
      top: 18,
      right: 12,
      color: '#A0A0B2',
      opacity: 0.5
    },
  });

    return (
      
      <Container>                                 
        <Logo />    
        <Header>       
        <Title>Cadastro de Ocorrências</Title>
        </Header> 

        <Form>
          <Fields>
            <Input
              placeholder="Nº Hidrômetro"
            />         
   
       <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setSelectedCity(value)}
          placeholder={{ label: "Selecione uma cidade", value: null }}
          items={cities}
          disabled={cities.length === 0}
          Icon={() => <Icon name="chevron-down" size={15} color="#A0A0B2" />}
        />
          
          
          

          </Fields>




          <Button 
          title='Cadastrar'
          onPress={handleSubmit}
          />
        </Form> 
      </Container>
      
    )
    }
