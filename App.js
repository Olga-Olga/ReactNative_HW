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
import MapScreen from "./Screens/MapScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "../redux/store";

const MainStack = createStackNavigator(); // вказує на групу навігаторів
const WebAPIKey = "AIzaSyB5hCUDV6KZCpc0CwdxR3MA0A1rRnazTUs";
export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <NavigationContainer>
          <MainStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={CreatePostsScreen}
          >
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
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
      </PersistGate>
    </Provider>
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
