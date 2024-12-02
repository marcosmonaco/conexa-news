import React, {useEffect, useState} from "react";
import {View, Text, FlatList, ActivityIndicator, TextInput} from "react-native";
import {useTranslation} from "react-i18next";

import {User, UserPageProps} from "@/models/user";

import "../global.css";

export default function Users({users, loading}: UserPageProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const {t} = useTranslation();

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredUsers(users);
    } else {
      // Esta constante se agrega para que si buscamos un nombre *espacio* apellido, no se salteen los nombres a causa del espacio.
      const filtered = users.filter((user) => {
        const fullName = `${user.firstname} ${user.lastname}`.toLowerCase();

        return (
          fullName.includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()) ||
          user.phone.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilteredUsers(filtered);
    }
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const renderItem = ({item: user}: {item: User}) => (
    <View className="bg-white mx-4 m-2 p-4 rounded-lg shadow">
      <View className="flex flex-row items-center gap-1">
        <Text className="text-lg text-gray-600">{user.firstname}</Text>
        <Text className="text-lg font-bold text-gray-800">{user.lastname}</Text>
        <Text className="text-lg text-gray-600">-</Text>
        <Text className="text-lg  text-gray-600">{user.phone}</Text>
      </View>
      <View className="flex flex-row">
        <Text className="text-sm text-gray-600">{user.email}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4 mb-10">
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder={t("users.searchUsers")}
        className="m-4 p-2 bg-white rounded-md border border-gray-300"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
