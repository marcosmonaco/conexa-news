import {SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useTranslation} from "react-i18next";

import Posts from "@/components/Posts";
import i18next from "@/services/i18next";

export default function HomeScreen() {
  const {t} = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-5 pb-0 gap-5">
        <Text className="text-5xl font-bold text-center">
          <Text className="text-blue-600">Conexa</Text> News
        </Text>
        <Text className="font-semibold text-3xl text-center">
          {t("technicalChallenge")}
        </Text>
        <Text className="text-center">
          {t("introduction")}
          <Text className="font-semibold">React Native Developer</Text>
        </Text>
        <TouchableOpacity
          className="bg-gray-400 w-40 p-2 rounded-xl self-center"
          onPress={() =>
            i18next.changeLanguage(i18next.language === "en" ? "es" : "en")
          }
        >
          <Text className="text-center text-white">{t("swapLanguage")}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <Posts />
    </SafeAreaView>
  );
}
