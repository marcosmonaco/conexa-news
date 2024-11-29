import {SafeAreaView, View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

import Posts from "@/components/Posts";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-5 gap-5">
        <Text className="text-5xl font-bold text-center">
          <Text className="text-blue-600">Conexa</Text> News
        </Text>
        <Text className="font-semibold text-3xl text-center">
          Desafio Tecnico
        </Text>
        <Text className="text-center">
          Realizado por Marcos Monaco para el puesto de{" "}
          <Text className="font-semibold">Native Developer</Text>
        </Text>
      </View>
      <StatusBar style="auto" />
      <Posts />
    </SafeAreaView>
  );
}
