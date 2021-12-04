import * as React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DestinationSearch from "./src/components/screens/DestinationSearch";
import HomeScreen from "./src/components/screens/HomeScreen";
import SearchResults from "./src/components/screens/SearchResults";


export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}
