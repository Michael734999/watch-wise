import { Film, FilmDetailsResponse } from '@services/api/starwars/api.types';

export interface StarwarsMoviesState {
  moviesData: Film[] | undefined;
  loading: boolean;
  error: boolean;
  movieDetails: FilmDetailsResponse | undefined;
  movieDetailsLoading: boolean;
  movieDetailsError: boolean;
}
