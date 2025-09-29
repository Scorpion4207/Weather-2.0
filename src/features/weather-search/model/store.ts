import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WeatherState } from "./types";

const initialState: WeatherState = {
  favoriteCities: new Set([]),
  selectedCity: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addFavoriteCity: (state, action: PayloadAction<string>) => {
      state.favoriteCities.add(action.payload);
    },
    deleteFavoriteCity: (state, action: PayloadAction<string>) => {
      state.favoriteCities.delete(action.payload);
    },
    citySearch: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { addFavoriteCity, citySearch, deleteFavoriteCity } =
  weatherSlice.actions;



export default weatherSlice.reducer;
