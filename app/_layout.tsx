import "react-native-reanimated";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import {useEffect} from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {I18nextProvider} from "react-i18next";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "@/hooks/useColorScheme";

import i18n from "../services/i18next";
import {persistor, store} from "../context/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="index" options={{headerShown: false}} />
              <Stack.Screen name="(tabs)" options={{headerShown: false}} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
