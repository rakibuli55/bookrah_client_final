import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEvent: null,
};

const eventCalenderSlice = createSlice({
  name: "calenderEvent",
  initialState,
  reducers: {
    onUpdateEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
});

export const {onUpdateEvent} = eventCalenderSlice.actions;
export default eventCalenderSlice.reducer;
