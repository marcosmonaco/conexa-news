import {View, Text} from "react-native";

import Users from "@/components/Users";

export default function UsersPage() {
  return (
    <View className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">Usuarios</Text>
      <Users />
    </View>
  );
}
