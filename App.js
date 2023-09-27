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

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />

        {/* <MainStack.Screen
          name="Home"
          component={PostsScreen}
          options={{
            title: "Публікації",
            alignItems: "center",
            // headerStyle: {
            //   backgroundColor: "#f4511e",
            // },
            // headerTintColor: "#fff",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            //   fontSize: 20,
            // },
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Login")}
                title="Exit"
                color="#fff"
              />
            ),
          }}
        /> */}

        <MainStack.Screen
          name="Home"
          component={PostsScreen}
          options={() => ({
            title: "Публікації",
            alignItems: "center",
            headerRight: () => (
              <Button
                onPress={() => alert("You log out!!!")}
                title="Exit"
                color="#fff"
              />
            ),
          })}
        />
      </MainStack.Navigator>
      {/* </View> */}
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
