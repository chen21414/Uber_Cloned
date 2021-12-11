import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar,  } from "expo-status-bar";
import * as React from "react";
import { useEffect } from "react";
import { View, Text, Platform, PermissionsAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from "@react-native-community/geolocation";

import Router from './src/components/Navigation/Root'
import HomeScreen from "./src/components/screens/HomeScreen";
import DestinationSearch from "./src/components/screens/DestinationSearch";
import SearchResults from "./src/components/screens/SearchResults";
import Test from './src/components/screens/Test';


navigator.geolocation = require('@react-native-community/geolocation');

export default function App() {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool location App location Permission",
          message:
            "Cool location App needs access to your location " +
            "so you can take awesome location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(()=>{
    if(Platform.OS === 'android') {
      androidPermission();
    } else {
      //iOS
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    // *very important, need to wrap with <> </> in order for navigation stack to work
    <>
      <StatusBar barStyle='dark-content'/>
      <Router/>
      {/* <Test/> */}
      {/* <HomeScreen/> */}
      {/* <DestinationSearch/> */}
      {/* <SearchResults/> */}
    </>
  );
}
