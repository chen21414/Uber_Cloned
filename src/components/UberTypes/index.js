import React from 'react'
import { View, Text, Pressable } from 'react-native'
import UberTypeRow from '../UberTypeRow'
import styles from './styles'

import typesData from '../../../UberAssets/data/types'
import types from '../../../UberAssets/data/types'
import { SafeAreaView } from 'react-native-safe-area-context'

const UberTypes = () => {
    const confirm = ()=>{
        console.warn('confirmed')
    }
    return (
        <SafeAreaView>
            {types.map(type => <UberTypeRow type={type} key={type.id}/>)}

            <Pressable onPress={confirm} style={{width:'100%', backgroundColor:'black', padding:10, margin:10, alignItems:'center', marginBottom:10}}>
                <Text style={{color:'white', fontWeight:'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable>
        </SafeAreaView>

    )
}

export default UberTypes
