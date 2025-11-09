import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileSidebarActive: false,
};

const dashSidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    handleMobileSidebar: (state, action) => {
      state.mobileSidebarActive = action.payload;
    },
  },
});

export const { handleMobileSidebar } = dashSidebarSlice.actions;
export default dashSidebarSlice.reducer;
