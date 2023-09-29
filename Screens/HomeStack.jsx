import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Feather } from "@expo/vector-icons";
import CreatePostsScreen from "./CreatePostsScreen";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Tabs = createBottomTabNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  const pressHandler = (e) => {
    e.preventDefault();
    console.log("Enter");
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121CC",
        tabBarShowLabel: false,
        tabBarStyle: { height: 83 },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "PostsScreen") {
            iconName = "grid";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "plus";
          } else if (route.name === "ProfileScreen") {
            iconName = "user";
          }

          return (
            <Feather
              name={iconName}
              size={size}
              color={focused ? "white" : color}
              style={{
                borderRadius: 100,
                paddingHorizontal: 28,
                paddingVertical: 13,
                backgroundColor: focused ? color : "transparent",
              }}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <Icon
              name="log-out"
              size={30}
              padding="10"
              color="grey"
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("You log out!!!")}
              title="Exit"
              color="#fff"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeStack;
