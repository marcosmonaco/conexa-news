import React from "react";
import {FlatList, Text, View, Image} from "react-native";
import {useTranslation} from "react-i18next";

import {toggleFavourite} from "@/slices/favouritesSlice";
import {PostData} from "@/models/post";

import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

import FavouriteButton from "./FavouriteButton";
import PostCard from "./PostCard";

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
        <PostCard post={item} />
        <FavouriteButton
          isFavourite={true}
          onPress={() => handleRemove(item)}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={favourites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}
