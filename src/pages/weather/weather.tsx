import { Fragment } from "react/jsx-runtime";
import { SearchBar } from "../../features/weather-search/ui/search-bar";
import { WeatherCard } from "../../features/weather-search/ui/weather-card";

export const Weather = () => {
  return (
    <Fragment>
      <main className="bg-[url(./src/pages/weather/assets/fon.jpg)] bg-cover bg-center flex absolute inert:0 w-full h-full justify-center align-center">
        <div className="  bg-black/70 rounded-2xl fixed inset-10 px-10 pt-7 shadow-[0_0_10px_15px_rgba(0,0,0,0.7)] ">
          <SearchBar />
          <WeatherCard />
        </div>
      </main>
    </Fragment>
  );
};
