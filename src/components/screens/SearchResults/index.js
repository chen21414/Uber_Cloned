import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import HomeMap from '../../HomeMap'
import UberTypes from '../../UberTypes'

const SearchResults = () => {
    return (
        <View style={{display:'flex', justifyContent:'space-between'}}>
            {/* this view will get universal height */}
            <View style={{height:Dimensions.get('window').height - 400}}>
            <HomeMap/>
            </View>

            <View style={{height:400}}>
            <UberTypes/>
            </View>
        </View>
    )
}

export default SearchResults
