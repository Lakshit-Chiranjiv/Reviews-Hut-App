import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

const getFonts = () => Font.loadAsync({
  'prompt-regular': require('./assets/fonts/Prompt-Regular.ttf'),
  'prompt-bold': require('./assets/fonts/Prompt-Bold.ttf'),
  'prompt-semibold': require('./assets/fonts/Prompt-SemiBold.ttf'),
})


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
