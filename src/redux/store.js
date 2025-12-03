import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import UserInfoSlice from "./features/auth/UserInfoSlice";
import dashSidebarSlice from "./features/business/DashSidebarSlice";
import eventCalenderSlice from "./features/business/EventCalenderSlice";
import onboardStepSlice from "./features/business/OnboardStepSlice";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userInfo"],
};

const rootReducer = combineReducers({
  onboardStep: onboardStepSlice,
  calenderEvent: eventCalenderSlice,
  sidebarSlice: dashSidebarSlice,
  userInfo: UserInfoSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store)