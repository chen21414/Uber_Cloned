import React from 'react'
import { Pressable, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/core'

import styles from './styles'

function HomeSearch() {

    const navigation = useNavigation();

    const goToSearch = ()=>{
        //console.warn('Search');
        navigation.navigate('DestinationSearch')
    }
    return (
        <View style={{marginBottom:100,}}>
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                </View>
            </Pressable>
            
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                <   AntDesign name={'clockcircle'} size={20} color={'#ffffff'}/>
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>
        
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor:'#218cff'}]}>
                <   Entypo name={'home'} size={20} color={'#ffffff'}/>
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>
        </View>
    )
}

export default HomeSearch
