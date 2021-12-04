import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',


    },
    inputText: {
        fontSize:20,
        fontWeight:'bold',
        flexDirection:'row',
        color:'#434343',
        //paddingLeft: 80,

    },
    timeContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:100,
        padding:10,
        //marginRight:80,
        backgroundColor:'#fff',
        borderRadius:50,
    },


    row:{
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'gray',
    },

    iconContainer:{
        backgroundColor:'#b3b3b3',
        padding:10,
        //marginLeft:80,
        borderRadius:25,

    },
    destinationText:{
        marginLeft:10,
        fontWeight:'600',
        fontSize:16,

    },

})

export default styles
