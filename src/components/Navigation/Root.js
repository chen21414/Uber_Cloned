import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import { View, Text } from 'react-native'


import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'
import { SafeAreaView } from 'react-native-safe-area-context';
import Test from '../screens/Test';
import HomeNavigator from './HomeNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => {
    return(
    <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>{props.name}</Text>
    </SafeAreaView>
    )
}

const RootNavigator = () => {
    return (
        //SafeAreaView style={{flex: 1}} is needed
        <SafeAreaView style={{flex: 1}}>
        <NavigationContainer >
            <Drawer.Navigator drawerContent={
                (props) => (
                <CustomDrawer {...props}/>)} 
                screenOptions={{headerShown:false}}>
                <Drawer.Screen name='Home' component={HomeNavigator} />

                <Drawer.Screen name='Your Trips'>
                    {/* a function returns the component */}
                    {() => <DummyScreen name={"Your Trips"}/> } 
                </Drawer.Screen>

                <Drawer.Screen name='Help'>
                    {() => <DummyScreen name={"Help"}/>} 
                </Drawer.Screen>

                <Drawer.Screen name='Wallet'>
                    {() => <DummyScreen name={"Wallet"}/>} 
                </Drawer.Screen>

                <Drawer.Screen name='Settings'>
                    {() => <DummyScreen name={"Settings"}/>} 
                </Drawer.Screen>

            </Drawer.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    )
}

export default RootNavigator
