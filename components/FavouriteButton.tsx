import React from "react";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

import {Ionicons} from "@expo/vector-icons";
import {FavouriteButtonProps} from "@/models/favouriteButton";

export default function FavouriteButton({
  isFavourite: isFavorite,
  onPress,
}: FavouriteButtonProps) {
  return (
    <GestureHandlerRootView
      className={`absolute top-2 right-2 rounded-xl p-2 ${
        isFavorite ? "bg-yellow-600" : "bg-gray-500"
      }`}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          size={20}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
