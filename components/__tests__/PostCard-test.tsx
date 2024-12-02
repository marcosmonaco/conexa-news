import React from "react";

import {render} from "@testing-library/react-native";
import {PostData} from "@/models/post";

import PostCard from "../PostCard";

describe("PostCard Component", () => {
  const mockPost: PostData = {
    id: 1,
    title: "Test Post Title",
    content: "This is a test post content.",
    image: "https://example.com/image.jpg",
  };

  it("should render the post card correctly with title, content, and image", () => {
    const {getByText, getByTestId} = render(<PostCard post={mockPost} />);

    // Check if the title and content are rendered correctly
    expect(getByText(mockPost.title)).toBeTruthy();
    expect(getByText(mockPost.content)).toBeTruthy();

    // Check if the image source is correct
    const image = getByTestId("post-image");
    expect(image.props.source.uri).toBe(mockPost.image);
  });
});
