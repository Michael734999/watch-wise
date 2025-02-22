import { FilmDetailsResponse } from '@services/api/starwars/api.types';

export interface UseStarWarsDetailsReturn {
  movieDetails?: FilmDetailsResponse;
  loading: boolean;
  error: boolean;
}
