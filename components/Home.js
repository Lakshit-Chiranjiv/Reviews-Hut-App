import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Home Page hh</Text>
        <Button title="Go to Details" onPress={
          () => navigation.navigate('Details')
          // or
          // () => navigation.push('Details')
        }/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Home