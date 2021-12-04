import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

function index() {
    return (
            <View>
            <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Quarantine if you are not fully vaccinated and have not   </Text>
            <Text style={styles.text}>recovered from COVID-19 in the past 90 days.</Text>
            <Text style={styles.learnMore}>Learn More</Text>
            </View>
            </View>
    )
}

export default index
