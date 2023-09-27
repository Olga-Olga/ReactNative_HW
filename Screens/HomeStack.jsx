import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Feather } from "@expo/vector-icons";
import CreatePostsScreen from "./CreatePostsScreen";

// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

const Tabs = createBottomTabNavigator();

const HomeStack = () => {
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
            iconName = focused ? "grid" : "grid";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "user" : "user";
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

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        // options={{
        //   headerTitle: () => <Text />,
        // }}
        // listeners={() => ({ tabPress: (e) => pressHandler(e) })}
      />

      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
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
