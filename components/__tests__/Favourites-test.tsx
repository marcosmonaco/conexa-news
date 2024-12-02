import React from "react";

import {render} from "@testing-library/react-native";
import {mockPosts} from "@/constants/Posts";
import {useAppDispatch} from "@/hooks/reduxHooks";

import FavouritesPosts from "../Favourites";

jest.mock("react-native-gesture-handler", () => ({
  GestureHandlerRootView: require("react-native/Libraries/Components/View/View"),
}));

jest.mock("../../hooks/reduxHooks", () => ({
  useAppDispatch: jest.fn(() => jest.fn()),
  useAppSelector: jest.fn(() => []),
}));

jest.mock("i18next", () => ({
  changeLanguage: jest.fn(),
  language: "en",
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Favourites Page Component", () => {
  it("should display all posts", () => {
    const dispatch = useAppDispatch();

    const {getByText} = render(
      <FavouritesPosts posts={mockPosts} dispatch={dispatch} />
    );

    // Verify the correct render of each post
    mockPosts.forEach((post) => {
      expect(getByText(post.title)).toBeTruthy();
      expect(getByText(post.content)).toBeTruthy();
    });
  });
});
