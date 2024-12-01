import {Text, SafeAreaView} from "react-native";
import {useTranslation} from "react-i18next";

import FavouritesPosts from "@/components/Favourites";

export default function Favourites() {
  const {t} = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-gray-100 py-10">
      <Text className="font-semibold text-3xl text-center">
        {t("favourites.title")}
      </Text>
      <FavouritesPosts />
    </SafeAreaView>
  );
}
