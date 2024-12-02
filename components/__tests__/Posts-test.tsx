import React from "react";

import {fireEvent, render} from "@testing-library/react-native";
import {mockPosts} from "@/constants/Posts";

import Posts from "../Posts";

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

describe("PostCard Component", () => {
  it("should display all posts", () => {
    const {getByText} = render(<Posts posts={mockPosts} loading={false} />);

    // Verify the correct render of each post
    mockPosts.forEach((post) => {
      expect(getByText(post.title)).toBeTruthy();
      expect(getByText(post.content)).toBeTruthy();
    });
  });

  it("should display the spinner when loading is true", () => {
    const {getByTestId} = render(<Posts posts={mockPosts} loading={true} />);

    // Verify that the spinner is present when loading
    expect(getByTestId("loading-spinner")).toBeTruthy();
  });

  it("should render the search posts input", () => {
    const {getByTestId} = render(<Posts posts={mockPosts} loading={true} />);

    // Verify that the search post input is rendered
    expect(getByTestId("search-input")).toBeTruthy();
  });

  it("should filter the posts when something is searched", () => {
    const {getByTestId, getByText, queryByText} = render(
      <Posts posts={mockPosts} loading={false} />
    );

    const searchInput = getByTestId("search-input");

    const searchTerm = mockPosts[0].title;
    fireEvent.changeText(searchInput, searchTerm);

    // Verify that the filtered post appears
    expect(getByText(mockPosts[0].title)).toBeTruthy();

    // Verify that posts not matching the search query do not appear
    mockPosts.slice(1).forEach((post) => {
      expect(queryByText(post.title)).toBeNull();
    });
  });
});
