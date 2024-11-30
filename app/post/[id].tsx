import React, {useEffect} from "react";
import {View, Text, Image, Button} from "react-native";
import {useLocalSearchParams, useNavigation} from "expo-router";
import {useTranslation} from "react-i18next";

export default function PostDetail() {
  const {
    id,
    title,
    content: content,
    image,
  } = useLocalSearchParams<{
    id: string;
    title: string;
    content: string;
    image: string;
  }>();

  const {t} = useTranslation();

  const navigation = useNavigation();

  const customGoBack = (
    <Button title={t("posts.goBack")} onPress={() => navigation.goBack()} />
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${t("posts.detailsFromPost")} ${id}`,
      headerLeft: () => customGoBack,
    });
  }, [id, navigation]);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Image
        source={{uri: image}}
        className="w-full h-60 rounded-lg mb-4"
        resizeMode="cover"
      />
      <Text className="text-xl font-bold text-gray-800">{title}</Text>
      <Text className="text-gray-700 mt-2 text-base">{content}</Text>
    </View>
  );
}
