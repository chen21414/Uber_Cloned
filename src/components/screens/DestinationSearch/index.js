import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from '@react-navigation/core';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');

    const [originalPlace, setOriginalPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const homePlace = {
        description: 'Home',
        geometry: { location: {lat: 48.8152937, lng:2.4597668}},
    };

    const workPlace = {
        description: 'Work',
        geometry: { location: {lat: 48.8152937, lng:2.4597668}},
    };

    const navigation = useNavigation();

    useEffect(() => {
        if(originalPlace && destinationPlace){
            //console.warn('Redirect to result')
            navigation.navigate('SearchResults', {
                originalPlace:originalPlace,
                destinationPlace:destinationPlace
            })
        }
    }, [originalPlace,destinationPlace])

    return (
        <SafeAreaView>
        <View style={styles.container}>
        <GooglePlacesAutocomplete
                //can find all the places from npm react places auto completed
                onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                   setOriginalPlace({data, details})
                }}

                enablePoweredByContainer={false} //turn off Google mark
                suppressDefaultStyles //to disregard google default style
                currentLocation={true}
                currentLocationLabel='Current location'
                styles={{
                    textInputContainer:styles.textInput,
                    container: 
                    styles.autocompleteContainer,
                    listView:styles.listView,
                    separator:styles.separator,
                }}
                fetchDetails
                placeholder='From'
                query={{ key: "AIzaSyApHykTRswHP3g2cPqtYabwzAOafYqgZu8" }}

                renderRow={(data) => <PlaceRow data={data}/>}
                renderDescription={(data)=>data.description || data.vicinity} //vicinity for current location, got this from console.log(data); if description is null, render vicinity
                //vicinity: A simplified address for the place, including the street name, street number, and locality, but not the province/state, postal code, or country. 
                
                //renderDescription={(data)=>data.description}
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete
                
                onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                   setDestinationPlace({data, details})
                }}

                enablePoweredByContainer={false} //turn off Google mark
                suppressDefaultStyles //to disregard google default style
                styles={{
                    textInputContainer:styles.textInput, 
                    container: {
                        ...styles.autocompleteContainer,
                        top:55, //copy and paste everything but overwrite top
                    },
                    listView:styles.listView,
                    separator:styles.separator,
                }}
                fetchDetails
                placeholder='Where to?'
                query={{ key: "AIzaSyApHykTRswHP3g2cPqtYabwzAOafYqgZu8" }}
                renderRow={(data) => <PlaceRow data={data}/>} //data is from above onPress
            />

            {/* Circle near original input */}
            <View style={styles.circle}/>

            {/* Line bw dots */}
            <View style={styles.line}/>
            {/* Square near Destination input */}
            <View style={styles.square}/>

        </View>
        </SafeAreaView>
    )
}

export default DestinationSearch
