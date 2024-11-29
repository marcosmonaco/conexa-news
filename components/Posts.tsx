import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
} from "react-native";
import {Link} from "expo-router";

import "../global.css";

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.org/posts");
        const data: Post[] = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  const renderItem = ({item}: {item: Post}) => (
    <Link
      href={`/post/${item.id}?title=${encodeURIComponent(
        item.title
      )}&content=${encodeURIComponent(item.content)}&image=${encodeURIComponent(
        item.image
      )}`}
      className="bg-white mx-4 m-2 p-4 rounded-lg shadow"
    >
      <Image
        source={{uri: item.image}}
        className="w-full h-40 rounded-lg mb-2"
        resizeMode="cover"
      />
      <View className="flex flex-col">
        <Text className="text-lg font-bold text-gray-800">{item.title}</Text>
        <Text className="text-sm text-gray-600" numberOfLines={2}>
          {item.content}
        </Text>
      </View>
    </Link>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Buscar posts..."
        className="m-4 p-2 bg-white rounded-md border border-gray-300"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
