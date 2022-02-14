import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Header from "../shared/header"
import About from '../screens/about'

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={
        ({ navigation }) => ({ headerTitle: () => <Header navigation={navigation} title={'About GameZone'}/> })
      }
      />
    </Stack.Navigator>
  );
}

export default AboutStack