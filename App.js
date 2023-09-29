import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeStack from "./Screens/HomeStack";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="HomeStack"
          component={HomeStack}
          options={() => ({
            title: "Публікації",
            alignItems: "center",
            headerShown: false,
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container1: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingHorizontal: 16,
  // },
});
