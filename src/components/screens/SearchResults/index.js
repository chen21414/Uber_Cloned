import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import HomeMap from '../../HomeMap'
import RouteMap from '../../RouteMap'
import UberTypes from '../../UberTypes'

import { useRoute } from '@react-navigation/core'

const SearchResults = () => {

    const route = useRoute();

    //console.log(route.params.destinationPlace.details.geometry.location); //not route.props, route stores at params
    //console.log(route.params.originPlace); //problem, don't know why can't get route.params.originPlace but destinationPlace
    const {originPlace, destinationPlace} = route.params;
    
    
    return (
        <View style={{display:'flex', justifyContent:'space-between'}}>
            {/* this view will get universal height */}
            <View style={{height:Dimensions.get('window').height - 400}}>
            <RouteMap originPlace={originPlace} destinationPlace={destinationPlace}/>
            </View>

            <View style={{height:400}}>
            <UberTypes />
            </View>
        </View>
    )
}

export default SearchResults
