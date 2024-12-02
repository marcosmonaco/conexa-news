import {Text, SafeAreaView} from "react-native";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

import Users from "@/components/Users";
import {User} from "@/models/user";
import {fetchUsers} from "@/services/users";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const {t} = useTranslation();
  return (
    <SafeAreaView className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">
        {t("users.title")}
      </Text>
      <Users users={users} loading={loading} />
    </SafeAreaView>
  );
}
