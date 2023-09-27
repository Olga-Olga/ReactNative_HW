import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SVGicons } from "../assets/SVGicons";
import { SvgXml } from "react-native-svg";
// import LogOut from "../assets/LogOut";

const PostsScreen = (users) => {
  const usersData = [
    {
      id: "1",
      name: "Olga",
      icon: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
      email: "olga@gmail.com",
    },
    // Добавьте других пользователей в массив
  ];
  const renderUserItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleIconClick(item.name)}
        style={styles.userItem}
      >
        <Image source={{ uri: item.icon }} style={styles.iconImage} />
        <View style={styles.userInfo}>
          <Text style={styles.emailText}>{item.email}</Text>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={usersData}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Занимает всю доступную высоту экрана
    justifyContent: "flex-end", // Выравнивание контейнера по нижней части экрана
    alignItems: "center", // Выравнивание элементов по центру горизонтально
  },
  iconContainer: {
    flexDirection: "row", // Расположение элементов в линию
    alignItems: "center", // Выравнивание элементов по центру вертикально
    padding: 16, // Добавляем отступы по бокам
  },
  icon: {
    marginRight: 39,
  },
  iconWithGap: {
    marginRight: 39,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "grey", // Цвет линии
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 16,
  },
});
