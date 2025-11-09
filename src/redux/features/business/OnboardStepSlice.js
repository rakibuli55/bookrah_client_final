import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  selectedLocation: null,
  selectedAddress: {},
};

const onboardStepSlice = createSlice({
  name: "onboardStep",
  initialState,
  reducers: {
    onSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    onPlacedChanged: (state, action) => {
      state.selectedLocation = action.payload.selectedLocation;
      state.searchQuery = action.payload.searchQuery;
      state.selectedAddress = action.payload.selectedAddress;
    },
    onEditLocation: (state) => {
      state.selectedLocation = null;
      state.searchQuery = "";
      state.selectedAddress = null;
    },
  },
});

export const { onSearchQuery, onPlacedChanged, onEditLocation } =
  onboardStepSlice.actions;
export default onboardStepSlice.reducer;
