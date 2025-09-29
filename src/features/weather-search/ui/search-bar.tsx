import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch } from "../../../app/providers/hooka";
import { citySearch } from "../model/store";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(citySearch(searchValue.trim()));
  };

  const isSubmitDisabled = !searchValue.trim();
  return (
    <form
      className="flex justify-center gap-7 text-xl mb-10"
      onSubmit={onSubmit}
      role="search"
      aria-label="Поиск города"
    >
      <input
        className="bg-white w-200 px-4 rounded-2xl border-4 border-blue-900"
        name="query"
        onChange={onChange}
        value={searchValue}
        placeholder="Введите название города..."
        type="search"
        aria-label="Название города"
        autoComplete="off"
      />
      <button
        className="bg-blue-900 rounded-3xl px-6 py-3 flex justify-center gap-3 items-center "
        type="submit"
        disabled={isSubmitDisabled}
        aria-label="Выполнить поиск"
      >
        Поиск
        <svg x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
      </button>
    </form>
  );
};
