import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const PostsScreen = (users) => {
  const usersData = [
    {
      id: "1",
      name: "Olga",
      icon: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
      email: "olga@gmail.com",
    },
    {
      id: "2",
      name: "Mykola",
      icon: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
      email: "olga@gmail.com",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={usersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Занимает всю доступную высоту экрана
    // justifyContent: "flex-end", // Выравнивание контейнера по нижней части экрана
    // alignItems: "flex-start", // Выравнивание элементов по центру горизонтально
  },
  iconContainer: {
    // flexDirection: "row", // Расположение элементов в линию
    // alignItems: "center", // Выравнивание элементов по центру вертикально
    // padding: 16, // Добавляем отступы по бокам
  },
  icon: {
    // marginRight: 39,
    // padding: 20,
  },
  iconWithGap: {
    // marginRight: 39,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "green", // Цвет линии
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 26,
    backgroundColor: "grey",
  },
  iconImage: {
    width: 36,
    height: 36,
    // marginRight: 16,
  },
  userInfo: {
    padding: 20,
    // flex: 1,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 16,
  },
});
