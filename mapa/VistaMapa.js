import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

export class VistaMapa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //tuxpan
            latitude: 19.55498,
            longitude: -103.37763833333332,
        }
    }

    //cambia los valores de longitude y latitude en state por los obtenidos de la ubicacion del usuario
    //no funciona
    especificarCoordenadasObtenidas(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        })
    }

    //OBTIENE LA UBICACIÓN EXACTA DEL USUARIO
    componentDidMount() {
        //se obtiene la posicion
        navigator.geolocation.getCurrentPosition(position => {
            this.especificarCoordenadasObtenidas(position)
            //var initialPosition = JSON.stringify(position);
            //this.setState({ initialPosition });
        },
            //se maneja el error  
            error => alert(error.message),
            //se establecen algunas propiedades de la ubicacion
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 2000
            })
    }

    render() {
        const tuxpan_coords = {
            latitude: 19.55498,
            longitude: -103.37763833333332,
            latitudeDelta: .0922,
            longitudeDelta: .0421,
        }

        const guzman_coords = {
            latitude: 19.7046600,
            longitude: -103.4617000,
            latitudeDelta: 0.030,
            longitudeDelta: 0.030,
        }

        return (
            <MapView
                style={styles.map}
                initialRegion={tuxpan_coords}
                //showsUserLocation
            >
                <Marker
                    coordinate={{
                        latitude: this.state.latitude,//19.55498,
                        longitude: this.state.longitude,//-103.37763833333332,
                    }}
                >
                    <View style={styles.radius}>
                        <View style={styles.marker} />
                    </View>
                </Marker>
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'red',
    },
    radius: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
