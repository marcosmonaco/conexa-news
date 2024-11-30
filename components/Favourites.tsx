import React from "react";
import {FlatList, Text, View, Image} from "react-native";
import {Link} from "expo-router";
import {useTranslation} from "react-i18next";

import {PostData} from "@/models/post";

import {useAppSelector} from "../hooks/reduxHooks";

export default function FavouritesPosts() {
  const favourites = useAppSelector((state) => state.favourites.favourites);

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

  const renderItem = ({item}: {item: PostData}) => {
    return (
      <Link
        href={`/post/${item.id}?title=${encodeURIComponent(
          item.title
        )}&content=${encodeURIComponent(
          item.content
        )}&image=${encodeURIComponent(item.image)}`}
        className="bg-white m-4 p-4 rounded-lg mb-2 shadow"
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
