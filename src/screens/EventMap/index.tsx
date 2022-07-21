import React, {useState, useEffect} from 'react'
import { Input } from '../../components/Form/Input'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

import { StyleSheet } from 'react-native'
import api from '../../services/api'
import {Container, TitleText} from './styles'


export default function EventMap(){
    const [events, setEvents] = useState([])
    const [position, setPosition] = useState({
        latitude: -13.03757,
        longitude: -41.77201,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    });

    
    useEffect(() => {
        api.get("/event", {})
        .then(res => {
            setEvents(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])
    

    return (
        <Container>
            <TitleText>Mapa de Eventos</TitleText>

            <Input 
            placeholder='Pesquisar'
            />

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -13.03757,
                    longitude: -41.77201,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                >

                {/*
                    events.map(event => {
                        const point = {latitude.lat, longitude: event.long}
                      //  const point = {latitude: event.lat, longitude: event.long}
                        return (
                            <Marker
                                key={String("Event")}
                                coordinate={point}
                                title="Evento"
                                description={'Venha ver as nossas novas promoções'}
                            />
                        )
                    }) */
                }
            </MapView>
        </Container>
    )
}

const styles = StyleSheet.create({

    map: {
        width: '95%',
        height: '70%',
        borderRadius: 8
    }
})