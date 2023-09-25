import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

export class PostsScreen extends Component {
  render() {
    return (
      <View style={styles.circle}>
        {/* <TouchableOpacity style={styles.icon}> */}
        <Text style={styles.iconText}>POST SCREEN</Text>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

export default PostsScreen;

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    // borderRadius: 50,
    // backgroundColor: "lightblue", // Цвет круга
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white", // Цвет иконки (крестика или плюсика)
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black", // Цвет символа (✕ или +)
  },
});
