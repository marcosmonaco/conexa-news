import {useTranslation} from "react-i18next";
import {Link, Stack} from "expo-router";

import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View} from "react-native";

export default function NotFoundScreen() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen options={{title: "Oops!"}} />

      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <View className="flex flex-1 px-5 pt-20 gap-5">
          <Text className="text-5xl font-bold text-center">
            <Text className="text-blue-600">Conexa</Text> News
          </Text>
          <Text className="font-semibold text-xl text-center">
            {t("notFound.title")}
          </Text>

          <View className="flex flex-col gap-8 ">
            <Link
              className="bg-blue-600 w-40 p-2 rounded-xl self-center"
              href="/(tabs)/posts"
            >
              <Text className="text-center text-white">
                {t("notFound.goBack")}
              </Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
