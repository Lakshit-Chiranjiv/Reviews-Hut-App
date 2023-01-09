import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Details = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text>Details Page</Text>
        <Button title="Go to Home" onPress={
          () => navigation.goBack()
        } />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Details