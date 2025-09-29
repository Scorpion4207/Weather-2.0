import type { LocationProps } from "../types";
import { ButtonFavorite } from "./button-favorite";

export const Location = ({ nameCity }: LocationProps) => {
  return (
    <div className="px-30 text-2xl text-center flex flex-col justify-center items-center ">
      <span className="text-4xl mb-3">{nameCity}</span>
      <ButtonFavorite isFavorite={false}/>
    </div>
  );
};
