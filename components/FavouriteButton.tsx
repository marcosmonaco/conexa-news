import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import {Ionicons} from "@expo/vector-icons";
import {FavouriteButtonProps} from "@/models/favouriteButton";
import {TouchableOpacity} from "react-native";

export default function FavouriteButton({
  isFavourite: isFavorite,
  onPress,
}: FavouriteButtonProps) {
  const isFav = isFavorite ? "star" : "star-outline";
  return (
    <GestureHandlerRootView
      className={`absolute top-2 right-2 rounded-xl p-2 ${
        isFavorite ? "bg-yellow-600" : "bg-gray-500"
      }`}
      testID="favourite-wrapper"
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        testID="favourite-button"
      >
        <Ionicons
          name={isFav}
          size={20}
          color="#FFFFFF"
          accessibilityLabel={isFav}
          testID="favourite-icon"
        />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
