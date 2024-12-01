import {useState} from "react";
import {router} from "expo-router";
import {useTranslation} from "react-i18next";
import {Text, TextInput, TouchableOpacity, View} from "react-native";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {t} = useTranslation();

  const isButtonDisabled = !username.trim() || !password.trim();

  return (
    <View className="flex flex-1 px-5 pt-20 gap-5">
      <Text className="text-5xl font-bold text-center">
        <Text className="text-blue-600">Conexa</Text> News
      </Text>
      <Text className="font-semibold text-3xl text-center">
        {t("login.technicalChallenge")}
      </Text>
      <Text className="text-center">
        {t("login.introduction")}
        <Text className="font-semibold">React Native Developer</Text>
      </Text>
      <View className="flex flex-col gap-8 pt-10">
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder={t("login.username")}
          className="p-2 bg-white rounded-md border border-gray-300"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder={t("login.password")}
          className="p-2 bg-white rounded-md border border-gray-300"
        />
        <TouchableOpacity
          disabled={isButtonDisabled}
          activeOpacity={0.8}
          className={`${
            isButtonDisabled ? "bg-gray-400" : "bg-blue-600"
          } w-40 p-2 rounded-xl self-center`}
          onPress={() => {
            router.replace("/(tabs)/posts");
          }}
        >
          <Text className="text-center text-white">{t("login.signIn")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
