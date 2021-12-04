import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import cars from '../../../UberAssets/data/cars'

function RouteMap() {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyApHykTRswHP3g2cPqtYabwzAOafYqgZu8'

    const origin = {
        latitude: 28.78825,
        longitude: -16.4324,
    }

    const destination = {
        latitude: 28.98825,
        longitude: -16.4924,
    }

    return (

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{width:'100%', height:'100%'}}
                initialRegion={{
                    latitude: 28.78825,
                    longitude: -16.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="black"
                />
                <Marker
                    coordinate={origin}
                    title={'Origin'}
                />
                <Marker
                    coordinate={destination}
                    title={"Destination"}
                />
            </MapView>

    )
}

export default RouteMap
