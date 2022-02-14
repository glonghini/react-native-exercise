import { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'

// Fonts
import * as Font from 'expo-font'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <>
        <StatusBar style='dark'/>
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>
      </>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}