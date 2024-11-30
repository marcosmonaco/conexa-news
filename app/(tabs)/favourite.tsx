import {View, Text} from "react-native";

import FavouritesPosts from "@/components/Favourites";


export default function Favourites() {
  return (
    <View className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">Favoritos</Text>
      <FavouritesPosts />
    </View>
  );
}
