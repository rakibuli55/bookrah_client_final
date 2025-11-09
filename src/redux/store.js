import { configureStore } from "@reduxjs/toolkit";
import dashSidebarSlice from "./features/business/DashSidebarSlice";
import eventCalenderSlice from "./features/business/EventCalenderSlice";
import onboardStepSlice from "./features/business/OnboardStepSlice";

const store = configureStore({
  reducer: {
    onboardStep: onboardStepSlice,
    calenderEvent: eventCalenderSlice,
    sidebarSlice: dashSidebarSlice,
  },
});

export default store;
