import { FilmDetailsResponse } from '@services/api/starwars/api.types';

export interface StarWarsDetailsCardProps {
  movieData?: FilmDetailsResponse;
  id?: string;
  loading: boolean;
}
