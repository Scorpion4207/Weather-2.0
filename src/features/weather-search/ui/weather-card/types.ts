export interface MainInfoProps {
  temp: number;
  condition: {
    icon: string;
    text: string;
  };
}

export interface AstronomyProps {
  astro: {
    sunrise: string;
    sunset: string;
  };
}

export interface ButtonFavoriteProps {
  isFavorite: boolean;
}

export interface LocationProps {
  nameCity: string
}
