import React from "react";
import {FlatList, Text, View, Image, TouchableOpacity} from "react-native";
import {Link} from "expo-router";
import {useTranslation} from "react-i18next";

import {toggleFavourite} from "@/slices/favouritesSlice";
import {PostData} from "@/models/post";
import {Ionicons} from "@expo/vector-icons";

import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

export default function FavouritesPosts() {
  const favourites = useAppSelector((state) => state.favourites.favourites);
  const dispatch = useAppDispatch();

  const {t} = useTranslation();

  if (favourites.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-semibold">
          {t("favourites.noFavouritesYet")}
        </Text>
      </View>
    );
  }

  const handleRemove = (item: PostData) => {
    dispatch(toggleFavourite(item));
  };

  const renderItem = ({item}: {item: PostData}) => {
    return (
      <View className="bg-white m-4 p-4 rounded-lg mb-2 shadow">
        <Link
          href={`/post/${item.id}?title=${encodeURIComponent(
            item.title
          )}&content=${encodeURIComponent(
            item.content
          )}&image=${encodeURIComponent(item.image)}`}
        >
          <View>
            <Image
              source={{uri: item.image}}
              className="w-full h-40 rounded-lg mb-2"
              resizeMode="cover"
            />
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-500" numberOfLines={2}>
              {item.content}
            </Text>
          </View>
        </Link>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleRemove(item)}
          className="absolute top-2 right-2 rounded-xl p-2 bg-yellow-600"
        >
          <Ionicons name="star" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={favourites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{padding: 16}}
    />
  );
}
