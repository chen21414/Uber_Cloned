import 'react-native-gesture-handler'; //needs to be on the top
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import { View, Text } from 'react-native'


import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'
import { SafeAreaView } from 'react-native-safe-area-context';
import Test from '../screens/Test';



const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home" >
                {/* <Stack.Screen name={"Test"} component={Test}/> */}
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
                <Stack.Screen name={"SearchResults"} component={SearchResults}/>
            </Stack.Navigator>
    )
}

export default HomeNavigator