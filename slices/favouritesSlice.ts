import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostData} from "@/models/post";

interface FavouriteState {
  favourites: PostData[];
}

const initialState: FavouriteState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<PostData>) => {
      const post = action.payload;

      const exists = state.favourites.some((fav) => fav.id === post.id);

      if (exists) {
        state.favourites = state.favourites.filter((fav) => fav.id !== post.id);
      } else {
        state.favourites.push(post);
      }
    },
  },
});

export const {toggleFavourite} = favouritesSlice.actions;

export default favouritesSlice.reducer;
