import React, {useEffect, useState} from "react";
import {View, Text, FlatList, ActivityIndicator, TextInput} from "react-native";

import {User} from "@/models/user";

import "../global.css";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.org/users");
        const data: User[] = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        (user) =>
          user.firstname.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()) ||
          user.phone.toLowerCase().includes(query.toLowerCase()) ||
          user.lastname.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const renderItem = ({item: user}: {item: User}) => (
    <View className="bg-white mx-4 m-2 p-4 rounded-lg shadow">
      <View className="flex flex-row items-center gap-1">
        <Text className="text-lg text-gray-600">{user.firstname}</Text>
        <Text className="text-lg font-bold text-gray-800">{user.lastname}</Text>
        <Text className="text-lg text-gray-800">-</Text>
        <Text className="text-lg  text-gray-800">{user.phone}</Text>
      </View>
      <View className="flex flex-row">
        <Text className="text-sm text-gray-600">{user.email}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Buscar usuarios..."
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
