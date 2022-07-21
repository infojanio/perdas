import React from 'react'
import {View, StyleSheet } from 'react-native'
import { Container } from './styles';

export function Logo() {
    return(
        
        <Container>
        <Circle />
        <Circle2/>
        </Container>
        
    )
}



const Circle = () => {

  return <View style={styles.circle} />;
 };     

const Circle2 = () => {

  return <View style={styles.circle2} />;
 };     
          

const styles = StyleSheet.create({

circle: {
  width: 120,
  height: 120,
  borderRadius: 120 / 2,
  backgroundColor: "#50C2C9",
  top: -60,
  left: -10,
  opacity: 0.5,
  
  },
circle2: {
  width: 120,
  height: 120,
  borderRadius: 120 / 2,
  backgroundColor: "#6AE0D9",
  top: -140,
  left: -50,
  opacity: 0.5,
  
  },
  

});