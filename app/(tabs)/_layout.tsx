import {Tabs} from "expo-router";
import React from "react";
import {Platform} from "react-native";
import {useTranslation} from "react-i18next";

import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const {t} = useTranslation();

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
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: t("users.title"),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: t("favourites.title"),
        }}
      />
    </Tabs>
  );
}
