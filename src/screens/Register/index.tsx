import React from 'react';

import { Input } from '../../components/Form/Input';
import { Container, Header, Title, SubTitle } from './styles';

export function Register() {
    return( 
        <Container>
            <Header>
            <Title>Cadastro de agente</Title>  
            <SubTitle>Preencha os dados abaixo!</SubTitle>          
            </Header>

            <Input
            placeholder='Nome'
            />
        </Container>
    )
}