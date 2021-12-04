import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import HomeMap from '../../HomeMap'
import HomeSearch from '../../HomeSearch'
import Message from '../../Message'
import styles from './styles'


function HomeScreen() {
    return (
        <View >
            <View style={{height:Dimensions.get('window').height - 400}}>
            <HomeMap/>
            </View>
            <Message/>
            <HomeSearch/>
        </View>
    )
}

export default HomeScreen
