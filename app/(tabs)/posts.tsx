import {SafeAreaView, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

import Posts from "@/components/Posts";
import {PostData} from "@/models/post";
import {fetchPosts} from "@/services/posts";

export default function HomeScreen() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const {t} = useTranslation();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">
        {t("posts.title")}
      </Text>
      <StatusBar style="auto" />
      <Posts posts={posts} loading={loading} />
    </SafeAreaView>
  );
}
