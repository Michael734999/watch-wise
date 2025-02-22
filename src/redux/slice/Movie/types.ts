import { FilterOptions } from '@pages/Movies/Movies.types';
import { TMDBMovieResponse } from '@services/api/tmdb/api.types';

export interface MoviesState {
  movies: TMDBMovieResponse | undefined;
  loading: boolean;
  error: boolean;
  filterOption: FilterOptions;
  pageNumber: number;
}
