import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home Page hh</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    text: {
        fontFamily: 'prompt-regular',
    }
})

export default Home