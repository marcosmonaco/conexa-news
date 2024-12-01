import {SafeAreaView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useTranslation} from "react-i18next";

import Posts from "@/components/Posts";

export default function HomeScreen() {
  const {t} = useTranslation();

  return (
    <View className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">
        {t("posts.title")}
      </Text>
      <StatusBar style="auto" />
      <Posts />
    </View>
  );
}
