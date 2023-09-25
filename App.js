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
      <View style={styles.container1}>
        <Image
          source={require("./assets/PhotoBG.png")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
          }}
        />
        {/* <LoginScreen /> */}
        {/* <RegistrationScreen /> */}
        {/* <PostsScreen /> */}

        <MainStack.Navigator>
          {/* Аналог Routes */}
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          {/* Аналог Route */}
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen
            name="Home"
            component={PostsScreen}
            options={{
              title: "Home screen",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
              },
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Press me"
                  color="#fff"
                />
              ),
            }}
          />
        </MainStack.Navigator>
      </View>
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
