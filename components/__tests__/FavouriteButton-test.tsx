import React from "react";

import {render, fireEvent} from "@testing-library/react-native";
import FavouriteButton from "@/components/FavouriteButton";

jest.mock("react-native-gesture-handler", () => ({
  GestureHandlerRootView: require("react-native/Libraries/Components/View/View"),
}));

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn().mockReturnValue(true),
}));

describe("FavouriteButton Component", () => {
  it("Should render the button correctly with the favourite icon active", () => {
    const {getByTestId} = render(
      <FavouriteButton isFavourite={true} onPress={jest.fn()} />
    );

    const button = getByTestId("favourite-button");
    const wrapper = getByTestId("favourite-wrapper");
    const icon = getByTestId("favourite-icon");

    // Verify that the button exists
    expect(button).toBeTruthy();

    // Verify that the touchableOpacity exists
    expect(wrapper).toBeTruthy();

    //Verify that it has the correct icon

    expect(icon.props.accessibilityLabel).toEqual("star");
  });

  it("Should render the button correctly with the inactive favourite icon", () => {
    const {getByTestId} = render(
      <FavouriteButton isFavourite={false} onPress={jest.fn()} />
    );

    const wrapper = getByTestId("favourite-wrapper");
    const button = getByTestId("favourite-button");

    const icon = getByTestId("favourite-icon");

    // Verify that the wrapper exists
    expect(wrapper).toBeTruthy();

    // Verify that the touchableOpacity exists
    expect(button).toBeTruthy();

    //Verify that it has the correct icon
    expect(icon.props.accessibilityLabel).toEqual("star-outline");
  });

  it("Should call the onPress function the button is pressed", () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <FavouriteButton isFavourite={true} onPress={onPressMock} />
    );

    const button = getByTestId("favourite-button");

    // Simulates the event of pressing the button
    fireEvent.press(button);

    // Verify that the onPress function was called
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
