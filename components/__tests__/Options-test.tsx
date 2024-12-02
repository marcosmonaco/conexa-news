import React from "react";
import i18next from "i18next";
import {router} from "expo-router";

import {render, fireEvent} from "@testing-library/react-native";

import Options from "../Options";

jest.mock("i18next", () => ({
  changeLanguage: jest.fn(),
  language: "en",
}));

jest.mock("expo-router", () => ({
  router: {
    replace: jest.fn(),
  },
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Options Component", () => {
  test("should render the correct text and call the onPress function when the switch language button is pressed", () => {
    const {getByTestId, getByText} = render(<Options />);

    // Find the switch language button and verify text
    const switchLanguageButton = getByTestId("switch-language-button");
    expect(getByText("options.swapLanguage")).toBeTruthy();

    // Simulates the event of pressing the button
    fireEvent.press(switchLanguageButton);

    // Verify that the language change function was called
    expect(i18next.changeLanguage).toHaveBeenCalledTimes(1);

    expect(i18next.changeLanguage).toHaveBeenCalledWith("es");
  });

  test("should render the correct text and call the onPress function when the sign out button is pressed", () => {
    const {getByTestId, getByText} = render(<Options />);

    // Find the sign out button and verify text
    const signOutButton = getByTestId("sign-out-button");
    expect(getByText("options.signOut")).toBeTruthy();

    // Simulates the event of pressing the button
    fireEvent.press(signOutButton);

    // Verify that the router.replace function was called
    expect(router.replace).toHaveBeenCalledTimes(1);
    expect(router.replace).toHaveBeenCalledWith("/");
  });
});
