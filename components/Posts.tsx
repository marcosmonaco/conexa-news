import React, {useEffect, useState} from "react";
import {View, FlatList, ActivityIndicator, TextInput} from "react-native";
import {useTranslation} from "react-i18next";

import {PostData} from "@/models/post";

import "../global.css";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {toggleFavourite} from "../slices/favouritesSlice";

import FavouriteButton from "./FavouriteButton";
import PostCard from "./PostCard";

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
      <View className="bg-white m-4 p-4 rounded-lg mb-2 shadow">
        <PostCard post={item} />
        <FavouriteButton
          isFavourite={isFavourite}
          onPress={() => dispatch(toggleFavourite(item))}
        />
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
