import React from "react";
import {SafeAreaView} from "react-native";

import SignIn from "@/components/SignIn";

export default function LoginPage() {
  return (
    // IMPORTANTE esto esta recreando un login flow para la ilusion solicitada en el challenge, no lleva logica de autenticacion.

    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <SignIn />
    </SafeAreaView>
  );
}
