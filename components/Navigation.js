import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import Loginbtn from "./Loginbtn";
import Getstarted from "./Getstarted";
import Register from "./Register";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get">
        <Stack.Screen name="Get" component={Getstarted} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Loginbtn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}