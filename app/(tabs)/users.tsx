import {View, Text} from "react-native";
import {useTranslation} from "react-i18next";

import Users from "@/components/Users";

export default function UsersPage() {
  const {t} = useTranslation();
  return (
    <View className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">
        {t("users.title")}
      </Text>
      <Users />
    </View>
  );
}
