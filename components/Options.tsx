import React from "react";
import i18next from "i18next";
import {router} from "expo-router";
import {useTranslation} from "react-i18next";
import {Text, TouchableOpacity, View} from "react-native";

export default function Options() {
  const {t} = useTranslation();

  return (
    <View className="p-5 pb-0 gap-5">
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-blue-600 w-40 p-2 rounded-xl self-center"
        onPress={() =>
          i18next.changeLanguage(i18next.language === "en" ? "es" : "en")
        }
      >
        <Text className="text-center text-white">
          {t("options.swapLanguage")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-blue-600 w-40 p-2 rounded-xl self-center"
        onPress={() => {
          router.replace("/");
        }}
      >
        <Text className="text-center text-white">{t("options.signOut")}</Text>
      </TouchableOpacity>
    </View>
  );
}
