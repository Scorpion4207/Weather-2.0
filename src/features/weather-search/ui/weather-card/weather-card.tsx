import { useAppSelector } from "../../../../app/providers/hooka";
import { useGetCurrentWeatherQuery } from "../../api/weather-api";
import { Astronomy } from "./astronomy";
import { Location } from "./location";
import { MainInfo } from "./main-info";

export const WeatherCard = () => {
  const selectCity = useAppSelector((state) => state.weather.selectedCity);
  const { isLoading, data, error } = useGetCurrentWeatherQuery(selectCity);

  return (
    <section className=" flex justify-center ">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className=" h-80 w-250 rounded-2xl text-white flex justify-between shadow-[0_0_10px_15px_rgba(0,0,0,0.7)] bg-black/70">
          <div className="px-20 flex flex-col justify-center items-center max-w-sm container">
            <MainInfo
              condition={data.current.condition}
              temp={data.current.temp_c}
            />
            <Astronomy astro={data.forecast.forecastday[0].astro} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Location nameCity={data.location.name} />
          </div>
        </div>
      ) : null}
    </section>
  );
};
