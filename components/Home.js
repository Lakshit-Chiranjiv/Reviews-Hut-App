import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    { title: 'The Legend of Zelda: Ocarina of Tie', rating: 5, body: 'lorem ipsum', key: '4' },
  ])

  return (
    <View style={globalStyles.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
              <Text style={styles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'prompt-bold',
    fontSize: 18,
  }
})

export default Home