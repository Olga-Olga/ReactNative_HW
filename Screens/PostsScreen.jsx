import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/auth/authSelectors";
import { postsSelector } from "../redux/posts/postsSelectors";
import { getPostsThunk } from "../redux/posts/postsOperations";
import { ScrollView } from "react-native-gesture-handler";

const PostsScreen = () => {
  const navigation = useNavigation();
  const { login, email } = useSelector(userSelector);
  const posts = useSelector(postsSelector);
  console.log("posts =====>", posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  const usersData = [
    {
      id: "1",
      name: `${login}`,
      icon: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
      email: `${email}`,
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
              <Text style={styles.emailText}>Email:{item.email}</Text>
              <Text style={styles.nameText}>Юзера: {item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <ScrollView>
        {/* <View>
          <View>
            <Text style={styles.userInfo}>Пости юзера: {login}</Text>
            <Text style={styles.userInfo}>Email: {email}</Text>
          </View>
        </View> */}
        {posts.map((item, index) => (
          <TouchableOpacity key={index} style={{ gap: 8, marginTop: 32 }}>
            <Text style={styles.postTitle}>ID: {item.id}</Text>
            <Text style={styles.postTitle}>TITLE: {item.title}</Text>
            <Image style={styles.postPhoto} source={{ uri: item.imgRef }} />
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 16,
  },
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  avatarPhoto: {
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "700",
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "400",
  },
  userInfo: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  postPhoto: {
    width: "100%",
    height: 240,
  },
  postTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    width: "100%",
  },
});
