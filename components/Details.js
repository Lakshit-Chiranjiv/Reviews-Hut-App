import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Details = ({ route,navigation }) => {

  const { title, rating } = route.params;

  return (
    <View style={globalStyles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.ratingText}>{rating}🔥</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'prompt-bold',
    fontSize: 24,
  },
  ratingText: {
    fontFamily: 'prompt-semibold',
  }
})

export default Details