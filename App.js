import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@react-native-vector-icons/fontisto";

import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Contact") {
            iconName = "disqus";
          }

          return <Fontisto name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor : "#aeaeaeff"
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true, animation:"slide_from_right", headerShown: false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen options={{ gestureEnabled: true,}} name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
