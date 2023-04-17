import { createSlice } from "@reduxjs/toolkit";

// initial State

const initialState = {
  searched: "",
  featuredSearched: "All",
};

//  create Slice

const filterSlice = createSlice({
  initialState,
  name: "filters",
  reducers: {
    searchAc: (state, action) => {
      state.searched = action.payload;
    },

    searchFeaturedAc: (state, action) => {
      state.featuredSearched = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { searchAc, searchFeaturedAc } = filterSlice.actions;
