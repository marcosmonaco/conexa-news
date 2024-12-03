import React from "react";
import {FlatList, Platform, Text, View} from "react-native";
import {useTranslation} from "react-i18next";

import {toggleFavourite} from "@/slices/favouritesSlice";
import {FavouritePageProps, PostData} from "@/models/post";

import FavouriteButton from "./FavouriteButton";
import PostCard from "./PostCard";

export default function FavouritesPosts({posts, dispatch}: FavouritePageProps) {
  const isIOS = Platform.OS === "ios";

  const {t} = useTranslation();

  if (posts.length === 0) {
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
      <View className="bg-white m-4 p-4 rounded-lg mb-2 shadow ">
        <PostCard post={item} />
        <FavouriteButton
          isFavourite={true}
          onPress={() => handleRemove(item)}
        />
      </View>
    );
  };

  return (
    <View className={`flex-1 bg-gray-100  ${isIOS ? "mb-10 p-4" : "mb-0 p-0"}`}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
