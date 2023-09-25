import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  FlatList,
  Image,
} from "react-native";

// import styledC from "styled-components";

const LoginScreen = () => {
  const navigation = useNavigation();
  // const {
  //   params: { userId },
  // } = useRoute();

  const [user, setUser] = useState({ Email: "", Password: "" });

  const handleInputChange = (fieldName, text) => {
    setUser({ ...user, [fieldName]: text });
  };

  const handleRegister = () => {
    console.log("User data:", user);
    Alert.alert("You tapped the button!");
  };

  const handlePress = () => {
    console.log("redirect to registration from");
    // Linking.openURL(url);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image
          resizeMode="cover"
          source={require("../assets/PhotoBG.png")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <View style={styles.container}>
          <FlatList />
          <Text style={styles.title}>Увійти</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.input}
              placeholder="Адрес електронної пошти"
              keyboardType="email-address"
              onChangeText={(text) => handleInputChange("Email", text)}
            />
            <TouchableOpacity>
              <TextInput
                style={styles.input}
                value={user.Password}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(text) => handleInputChange("Password", text)}
              />
              <Text
                style={{
                  position: "absolute",
                  right: 16,
                  top: 15,
                }}
              >
                Показати
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.btnWrapper} onPress={handleRegister}>
            <Text style={styles.btn}>Увійти</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center" }}>
            Немає акаунту?{" "}
            <Text
              onPress={() => navigation.navigate("Registration")}
              style={{ color: "blue", textDecorationLine: "underline" }}
            >
              Зареєструватися
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#eaeaea",
    marginTop: 323,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    position: "relative",
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    // position: "relative",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    paddingBottom: 33,
    marginTop: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "absolut",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
  },

  btnWrapper: {
    height: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    paddingTop: 16,
    marginTop: 43,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  addIcon: {
    borderRadius: 50,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 20,
    right: -8,
    transform: [{ rotate: "-45deg" }],
  },
  addIconText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#FF6C00",
  },
  btn: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    height: 32,
  },
});
