import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Details = ({ route,navigation }) => {

  const { title, rating, body } = route.params;

  return (
    <View style={globalStyles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.bodyText}>{body}</Text>
        <Text style={styles.ratingText}>{rating}🔥</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'prompt-bold',
    fontSize: 24,
  },
  bodyText: {
    fontFamily: 'prompt-regular',
  },
  ratingText: {
    fontFamily: 'prompt-semibold',
    fontSize: 16,
    marginVertical: 10,
  }
})

export default Details