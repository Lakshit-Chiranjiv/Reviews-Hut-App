import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Home Page hh</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Home