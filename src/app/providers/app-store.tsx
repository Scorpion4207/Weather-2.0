import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../../shared/api/base-api";
import { setupListeners } from "@reduxjs/toolkit/query";
import weatherSlice from "../../features/weather-search/model/store";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
