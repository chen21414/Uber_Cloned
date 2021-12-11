import React from 'react'
import { View, Text, Pressable } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <SafeAreaView style={{backgroundColor:'black', padding:15, }}>
                {/* User Row*/}
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <View style={{backgroundColor:'#cacaca', width:50, height:50, borderRadius:25, marginRight:10,}}/>
                        <View >
                            <Text style={{color:'white', fontSize:24}}>Mike Chen</Text>
                            <Text style={{color:'lightgrey', }}>5.00 *</Text>
                        </View>
                    </View>
                {/* Messages Row */}
                <View style={{borderTopWidth:1, borderBottomWidth:1, borderBottomColor:'#919191', borderTopColor:'#919191',paddingVertical:5,marginVertical:10,}}>
                <Pressable onPress={()=> {console.warn('Make Money Driving!')}}>
                    <Text style={{color:'#dddddd', paddingVertical:5,}}>Messages</Text>
                </Pressable>
                </View>
                {/* Do more */}
                <Pressable onPress={()=> {console.warn('Make Money Driving!')}}>
                    <Text style={{color:'#dddddd', paddingVertical:5,}}>Do more with your account</Text>
                </Pressable>
                {/* Make money */}
                <Pressable onPress={()=> {console.warn('Make Money Driving!')}}>
                    <Text style={{color:'white', paddingVertical:5}}>Make Money Driving</Text>
                </Pressable>
            </SafeAreaView>
            {/* adding this so all the home, help.. will shown for this custom*/}
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer
