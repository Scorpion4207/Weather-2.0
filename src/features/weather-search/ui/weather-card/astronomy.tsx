import { formatTime12To24 } from "../../lib/time-convert";
import type { AstronomyProps } from "./types";

export const Astronomy = ({ astro }: AstronomyProps) => {
  const { sunrise, sunset } = astro;

  return (
    <div className="flex gap-3 items-center text-center text-xl">
      <div>
        Восход
        <div>{formatTime12To24(sunrise)} </div>
      </div>
      <span className="h-15 w-0.5 bg-white"></span>
      <div>
        Закат
        <div>{formatTime12To24(sunset)} </div>
      </div>
    </div>
  );
};
