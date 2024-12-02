import React from "react";
import {Link} from "expo-router";
import {Image, Text, View} from "react-native";

import {PostData} from "@/models/post";

export default function PostCard({post}: {post: PostData}) {
  return (
    <Link
      href={`/post/${post.id}?title=${encodeURIComponent(
        post.title
      )}&content=${encodeURIComponent(post.content)}&image=${encodeURIComponent(
        post.image
      )}`}
    >
      <Image
        source={{uri: post.image}}
        className="w-full h-40 rounded-lg mb-2"
        resizeMode="cover"
        testID="post-image"
      />
      <View className="flex flex-col">
        <Text className="text-lg font-bold text-gray-800">{post.title}</Text>
        <Text className="text-sm text-gray-600 mt-1" numberOfLines={2}>
          {post.content}
        </Text>
      </View>
    </Link>
  );
}
