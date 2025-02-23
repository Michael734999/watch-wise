import { TMDBMovieResponse } from '@services/api/tmdb/api.types';

export interface MovieSearchState {
  searchValue: string;
  pageNumber: number;
  searchData: TMDBMovieResponse | undefined;
  loading: boolean;
  error: boolean;
}
