import { TMDBMovieResponse } from '@services/api/tmdb/api.types';

export enum FilterOptions {
  POPULARITY = 'popularity.desc',
  VOTE_AVERAGE = 'vote_average.desc&vote_count.gte=10000',
}

export interface UseMoviesReturn {
  movies?: TMDBMovieResponse;
  setPageNumber: (page: number) => {
    payload: number;
    type: 'movies/setPageNumber';
  };
  loading: boolean;
  error: boolean;
  setFilterOption: (option: FilterOptions) => {
    payload: FilterOptions;
    type: 'movies/setFilterOption';
  };
  pageNumber: number;
  filterOption: FilterOptions;
}
