import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import cars from '../../../UberAssets/data/cars'

function HomeMap() {

    const getImage = (types)=>{
        if (types.type === 'UberX') {
            return require(`../../../UberAssets/images/top-UberX.png`)
        }

        if (types.type === 'Comfort') {
            return require(`../../../UberAssets/images/top-Comfort.png`)
        }

        if (types.type === 'UberXL') {
            return require(`../../../UberAssets/images/top-UberXL.png`)
        }
    }

    return (

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{width:'100%', height:'100%'}}
                showUserLocation={true}
                initialRegion={{
                    latitude: 28.78825,
                    longitude: -16.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                
                {cars.map((car) => (
                      <Marker
                      key={car.id}
                      coordinate={{latitude:car.latitude, longitude:car.longitude}}
                      >
                      {/* below custom marker to make the car indicator smaller */}
                      <Image 
                          style={{
                              width:70, 
                              height:70, 
                              resizeMode: 'contain', 
                              transform:[{rotate:`${car.heading}deg`
                            }]
                        }}
                          source={getImage(car.type)} />
                      </Marker>
                ))}

                
            </MapView>

    )
}

export default HomeMap
