import { useGetCurrentWeatherQuery } from "../api/weather-api";

export const WeatherCard = () => {
  const { isLoading, data, error } = useGetCurrentWeatherQuery("Юрга");

  return (
    <div className=" flex justify-center ">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className=" h-80 w-250 rounded-2xl text-white">
          <div>{data.current.temp_c}</div>
          <div>{data.location.name}</div>
          <img src={data.current.condition.icon} alt="Иконка" />
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5154 1C15.9205 1 13.5851 2.7875 12.6769 5.125C11.7687 2.7875 9.43333 1 6.83846 1C3.59487 1 1 3.6125 1 7.1875C1 12 5.54103 16.125 12.6769 23C19.8128 16.125 24.3538 12 24.3538 7.1875C24.3538 3.6125 21.759 1 18.5154 1Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};
