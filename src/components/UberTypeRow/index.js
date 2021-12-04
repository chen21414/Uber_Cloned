import React from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const UberTypeRow = (props) => {

    const {type} = props;
    const types = type;

    const getImage = ()=>{
        if (types.type === 'UberX') {
            return require(`../../../UberAssets/images/UberX.jpeg`)
        }

        if (types.type === 'Comfort') {
            return require(`../../../UberAssets/images/UberX.jpeg`)
        }

        if (types.type === 'UberXL') {
            return require(`../../../UberAssets/images/UberXL.jpeg`)
        }
    }
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={getImage()} />
            <View style={styles.middleContainer}>
                    <Text style={styles.type}>
                    {/* {' '} means adding space */}
                    {types.type}{' '} 
                    <Ionicons name={'person'} size={16}></Ionicons>
                    3
                    </Text>
                    <Text style={styles.time}>
                    8:03PM drop off
                    </Text>
            </View>
            <View style={styles.rightContainer}>
                    <Ionicons name={'pricetag'} size={18} color={'#42d742'}></Ionicons>
                    <Text style={styles.price}>
                        est. ${types.price}
                    </Text>
            </View>
        </View>
    )
}

export default UberTypeRow
