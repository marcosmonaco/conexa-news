import React from "react";
import {router} from "expo-router";

import {render, fireEvent, act} from "@testing-library/react-native";

import SignIn from "../SignIn";

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

describe("SignIn component", () => {
  it("should render the SignIn component correctly", () => {
    const {getByText, getByPlaceholderText} = render(<SignIn />);

    // Check if static texts are rendered
    expect(getByText("Conexa News")).toBeTruthy();
    expect(getByText("login.technicalChallenge")).toBeTruthy();
    expect(getByText("login.introduction")).toBeTruthy();
    expect(getByPlaceholderText("login.username")).toBeTruthy();
    expect(getByPlaceholderText("login.password")).toBeTruthy();
    expect(getByText("login.signIn")).toBeTruthy();
  });

  it("should disable the SignIn button when fields are empty", () => {
    const {getByTestId} = render(<SignIn />);

    const signInButton = getByTestId("sign-in-button");

    // Check if the button stays disabled
    expect(signInButton.props.accessibilityState.disabled).toBe(true);
  });

  it("should enable the SignIn button when fields are filled and navigate correctly", async () => {
    const {getByPlaceholderText, getByTestId} = render(<SignIn />);

    const usernameInput = getByPlaceholderText("login.username");
    const passwordInput = getByPlaceholderText("login.password");
    const signInButton = getByTestId("sign-in-button");

    // Ensure state updates are awaited in act
    await act(async () => {
      fireEvent.changeText(usernameInput, "testuser");
      fireEvent.changeText(passwordInput, "password123");
    });

    expect(signInButton.props.accessibilityState.disabled).toBe(false);

    // Simulate button press
    await act(async () => {
      fireEvent.press(signInButton);
    });

    // Check navigation
    expect(router.replace).toHaveBeenCalledTimes(1);
    expect(router.replace).toHaveBeenCalledWith("/(tabs)/posts");
  });
});
