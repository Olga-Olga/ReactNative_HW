import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      //   tabBarOptions={{
      //     activeTintColor: "tomato",
      //     inactiveTintColor: "gray",
      //   }}
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
        component={View}
        listeners={() => ({ tabPress: (e) => pressHandler(e) })}
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
