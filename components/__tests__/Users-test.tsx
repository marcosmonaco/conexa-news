import React from "react";

import {fireEvent, render} from "@testing-library/react-native";
import {mockUsers} from "@/constants/Users";

import Users from "../Users";

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

describe("Users Page Component", () => {
  it("should display all users", () => {
    const {getByText} = render(<Users users={mockUsers} loading={false} />);

    // Verify the correct render of each user
    mockUsers.forEach((user) => {
      expect(getByText(user.firstname)).toBeTruthy();
      expect(getByText(user.lastname)).toBeTruthy();
      expect(getByText(user.email)).toBeTruthy();
      expect(getByText(user.phone)).toBeTruthy();
    });
  });

  it("should display the spinner when loading is true", () => {
    const {getByTestId} = render(<Users users={mockUsers} loading={true} />);

    // Verify that the spinner is present when loading
    expect(getByTestId("users-loading-spinner")).toBeTruthy();
  });

  it("should render the search users input", () => {
    const {getByTestId} = render(<Users users={mockUsers} loading={true} />);

    // Verify that the search user input is rendered
    expect(getByTestId("user-search-input")).toBeTruthy();
  });

  it("should filter the users when something is searched", () => {
    const {getByTestId, getByText, queryByText} = render(
      <Users users={mockUsers} loading={false} />
    );

    const searchInput = getByTestId("user-search-input");

    const searchTerm = mockUsers[0].firstname;
    fireEvent.changeText(searchInput, searchTerm);

    // Verify that the filtered user appears
    expect(getByText(mockUsers[0].firstname)).toBeTruthy();

    // Verify that users not matching the search query do not appear
    mockUsers.slice(1).forEach((user) => {
      expect(queryByText(user.firstname)).toBeNull();
    });
  });
});
