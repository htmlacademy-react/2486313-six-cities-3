import { Town } from './town.tsx';
import { cities } from '../const/const.ts';

export function ListCities ({currentCity, onLocationClick} : {
  currentCity: string;
  onLocationClick: (city: string) => void;
}) {
  return (
    <ul className="locations__list tabs__list">
      {
        cities
          .map((city) => (
            <Town
              key={city}
              city={city}
              isCheck={city === currentCity}
              onLocationClick={onLocationClick}
            />
          ))
      }
    </ul>
  );
}
