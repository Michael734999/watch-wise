import { Film } from '@services/api/starwars/api.types';

export interface UseMovieDataReturn {
  moviesData?: Film[];
  loading: boolean;
  error: boolean;
}
