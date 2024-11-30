import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {Link} from "expo-router";
import {useTranslation} from "react-i18next";

import {PostData} from "@/models/post";

import "../global.css";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {toggleFavourite} from "../slices/favouritesSlice";

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);

  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const favourites = useAppSelector((state) => state.favourites.favourites);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.org/posts");
        const data: PostData[] = await response.json();

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

  const renderItem = ({item}: {item: PostData}) => {
    const isFavourite = favourites.some((fav) => fav.id === item.id);

    return (
      <View className="bg-white mx-4 m-2 p-4 rounded-lg shadow">
        <Link
          href={`/post/${item.id}?title=${encodeURIComponent(
            item.title
          )}&content=${encodeURIComponent(
            item.content
          )}&image=${encodeURIComponent(item.image)}`}
        >
          <Image
            source={{uri: item.image}}
            className="w-full h-40 rounded-lg mb-2"
            resizeMode="cover"
          />
          <View className="flex flex-col">
            <Text className="text-lg font-bold text-gray-800">
              {item.title}
            </Text>
            <Text className="text-sm text-gray-600 mt-1" numberOfLines={2}>
              {item.content}
            </Text>
          </View>
        </Link>
        <TouchableOpacity
          onPress={() => dispatch(toggleFavourite(item))}
          className={`mt-2 p-2 ${
            isFavourite ? "bg-red-500" : "bg-gray-400"
          } rounded-lg w-fit`}
        >
          <Text className="text-sm font-bold text-center text-white">
            {isFavourite ? t("posts.removeFavourite") : t("posts.addFavourite")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder={t("posts.searchPosts")}
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
