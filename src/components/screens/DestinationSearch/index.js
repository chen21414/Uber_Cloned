import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');

    const [originalPlace, setOriginalPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if(originalPlace&&destinationPlace){
            console.warn('Redirect to result')
        }
    }, [originalPlace,destinationPlace])

    return (
        <SafeAreaView>
        <View style={styles.container}>
        <GooglePlacesAutocomplete
                
                onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                    setOriginalPlace({data, details})
                }}
                styles={{textInputContainer:styles.textInput, }}
                fetchDetails
                placeholder='From'
                query={{ key: "AIzaSyApHykTRswHP3g2cPqtYabwzAOafYqgZu8" }}
            />

            <GooglePlacesAutocomplete
                
                onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                   setDestinationPlace({data, details})
                }}
                styles={{textInputContainer:styles.textInput, }}
                fetchDetails
                placeholder='Where to?'
                query={{ key: "AIzaSyApHykTRswHP3g2cPqtYabwzAOafYqgZu8" }}
            />
        </View>
        </SafeAreaView>
    )
}

export default DestinationSearch
