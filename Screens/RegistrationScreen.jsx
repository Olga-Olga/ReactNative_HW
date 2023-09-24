import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const RegistrationScreen = () => {
  const [user, setUser] = useState({ Name: "", Email: "", Password: "" });

  const handleInputChange = (fieldName, text) => {
    setUser({ ...user, [fieldName]: text });
  };

  const handleRegister = () => {
    console.log("User data:", user);
    // perform further actions here, like sending the data to a server.
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <View style={styles.addIcon}>
          <Text style={styles.addIconText}>✕</Text>
        </View>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={styles.input}
        placeholder="Логін"
        onChangeText={(text) => handleInputChange("Name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Адрес електронної пошти"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("Email", text)}
      />
      <TextInput
        style={styles.input}
        value={user.Password}
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("Password", text)}
      />
      <TouchableOpacity style={styles.btnWrapper} onPress={handleRegister}>
        <Text style={styles.btn}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center" }}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#eaeaea",
    marginTop: 263,
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
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    paddingBottom: 33,
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
    borderWidth: 1,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    bottom: 22,
    right: -11,
    position: "absolute",
    transform: [{ rotate: "45deg" }],
  },
  addIconText: {
    // fontSize: 16,
    fontWeight: "bold",
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