import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Header from "../shared/header"
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetails"

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={
        ({ navigation }) => ({ headerTitle: () => <Header navigation={navigation} title={'GameZone'}/> })
      }
      />
      <Stack.Screen name="Review Details" component={ReviewDetails}/>
    </Stack.Navigator>
  );
}

export default HomeStack