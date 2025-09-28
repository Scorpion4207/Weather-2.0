import { weatherApi } from "../../../shared/api/base-api";
import type { RootInterface } from "./types";

const currentWeather = weatherApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<RootInterface, string>({
      query: (city) =>
        `current.json?key=220e1cb8661f4ae0baf102558252509&q=${city}`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = currentWeather;
