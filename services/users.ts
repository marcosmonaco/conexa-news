export const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.org/users");
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
