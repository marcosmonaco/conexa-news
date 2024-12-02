export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.org/posts");
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
