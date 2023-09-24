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

export default function App() {
  return (
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
      <RegistrationScreen />
      {/* <PostsScreen /> */}
    </View>
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
