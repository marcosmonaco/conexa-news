import {Tabs} from "expo-router";
import React from "react";
import {Platform} from "react-native";
import {useTranslation} from "react-i18next";

import {Ionicons} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const {t} = useTranslation();

  const tabIconColor = {
    active: "#51A3BE",
    inactive: "#A9A9A9",
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("posts.title"),
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="newspaper"
              size={20}
              color={focused ? tabIconColor.active : tabIconColor.inactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: t("users.title"),
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-circle"
              size={20}
              color={focused ? tabIconColor.active : tabIconColor.inactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: t("favourites.title"),
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="star"
              size={20}
              color={focused ? tabIconColor.active : tabIconColor.inactive}
            />
          ),
        }}
      />
    </Tabs>
  );
}
