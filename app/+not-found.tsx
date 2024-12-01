import {useTranslation} from "react-i18next";
import {Link, Stack} from "expo-router";

import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function NotFoundScreen() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen options={{title: "Oops!"}} />
      <ThemedView className="flex-1 items-center justify-center p-20">
        <ThemedText type="title">{t("notFound.title")}</ThemedText>
        <Link href="/(tabs)/posts" className="mt-12 py-12">
          <ThemedText type="link">{t("notFound.goBack")}</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
