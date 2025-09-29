import type { MainInfoProps } from "./types";

export const MainInfo = ({ temp, condition }: MainInfoProps) => {
  const { icon, text } = condition;

  return (
    <div className="px-20 flex flex-col justify-center items-center max-w-sm container mb-3">
      <div className=" flex ">
        <span className="text-8xl">{Math.round(temp)}°</span>
        <div className="w-16">
          <img src={icon} alt="Иконка" />
        </div>
      </div>
      <div className="text-2xl text-center">{text}</div>
    </div>
  );
};
