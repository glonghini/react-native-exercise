import { createDrawerNavigator } from "@react-navigation/drawer"
import { Text } from "react-native"
import AboutStack from "./aboutStack"
import HomeStack from "./homeStack"

const Drawer = createDrawerNavigator()

const drawerOptions = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: 'floralwhite'
  }
}

const drawerGroupOptions = {
  drawerActiveBackgroundColor: 'coral',
  drawerActiveTintColor: 'white',
  drawerInactiveBackgroundColor: 'lightsalmon',
  drawerInactiveTintColor: 'white',
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={drawerOptions}>
      <Drawer.Group screenOptions={drawerGroupOptions}>
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{title: "Home"}}/>
        <Drawer.Screen name="AboutStack" component={AboutStack} options={{title: "About"}}/>
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator