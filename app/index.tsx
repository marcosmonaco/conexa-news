import React from "react";
import {View} from "react-native";
import {useRouter} from "expo-router";

import SignIn from "@/components/SignIn";

export default function LoginPage() {
  const router = useRouter();

  return (
    // IMPORTANTE esto esta recreando un login flow para la ilusion solicitada en el challenge, no lleva logica de autenticacion.

    <View className="flex-1 justify-center items-center bg-white">
      <SignIn />
    </View>
  );
}
