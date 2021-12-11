import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import cars from '../../../UberAssets/data/cars'

function RouteMap({originPlace, destinationPlace}) {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyApHykTRswHP3g2cPqtYabwzAOafYqgZu8'

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045
    }

    const destination = {
        latitude: 28.460627,
        longitude: -16.269045
    }
    
    const originLoc = {
        // latitude: originPlace.details.geometry.location.lat,
        // longtitude: originPlace.details.geometry.location.lng,
    }; 

    const destinationLoc = {
        latitude: destinationPlace.details.geometry.location.lat,
        longtitude: destinationPlace.details.geometry.location.lng,
    }; 

    console.log(originLoc)
    return (

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                showUserLocation={true}
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
                    destination={destinationLoc}
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
