import { weatherApi } from "../../../shared/api/base-api";
import type { JsonInterface } from "./types";

const currentWeather = weatherApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<JsonInterface, string | null>({
      query: (city) =>
        `forecast.json?key=220e1cb8661f4ae0baf102558252509&q=${city}&lang=ru&days=1&aqi=no&alerts=no&hour=all`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = currentWeather;
