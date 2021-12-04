import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1065e9',
        padding:10,
        flexShrink:1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        //paddingLeft:100,
    },
    title: {
        color:'white',
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 10,
        

    },
    text: {
        color:'#bed9ff',
        fontSize: 15,
        marginBottom: 10,

    },
    learnMore: {
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',

    },
    
})

export default styles
