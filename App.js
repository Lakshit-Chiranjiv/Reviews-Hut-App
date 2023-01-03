import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState,useCallback, useEffect } from 'react';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {

        await Font.loadAsync({
          'prompt-regular': require('./assets/fonts/prompt/Prompt-Regular.ttf'),
          'prompt-bold': require('./assets/fonts/prompt/Prompt-Bold.ttf'),
          'prompt-semibold': require('./assets/fonts/prompt/Prompt-SemiBold.ttf'),
        });

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View 
      style={styles.container}
      onLayout={onLayoutRootView}>
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
