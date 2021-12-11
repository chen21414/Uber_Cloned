import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const PlaceRow = ({data}) => {
    //console.log(data) //description
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === 'Home'
                ? <Entypo name='home' size={20} color={'white'}/>
                : 
                data.description === 'Work'
                ? <Entypo name='briefcase' size={20} color={'white'}/>
                : <Entypo name='location-pin' size={20} color={'white'}/>
                }

            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
            {/* <Text style={styles.locationText}>{data.description}</Text> */}

        </View>
    )
}

export default PlaceRow
