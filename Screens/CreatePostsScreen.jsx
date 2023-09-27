import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
// import { SvgXml } from "react-native-svg-xml";
import { SvgXml } from "react-native-svg";

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const cross = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 70 40" fill="none">
<g clip-path="url(#clip0_12_109)">
<rect width="70" height="40" rx="20" fill="#FF6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_12_109">
<rect width="70" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`;

const personIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const CreatePostsScreen = (users) => {
  const handleIconClick = (iconName) => {
    // Ваш обработчик нажатия на иконку, можете добавить свою логику здесь
    console.log(`Clicked on ${iconName}`);
  };

  const usersData = {
    name: "Olga",
    icon: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
    email: "olga@gmail.com",
  };

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

      <View style={styles.separator}>{/* Разделительная линия */}</View>
      <View style={styles.iconContainer}></View>
    </View>
  );
};

export default CreatePostsScreen;

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
