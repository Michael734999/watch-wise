import { TMDBMovieDetails } from '@services/api/tmdb/api.types';

export interface MovieDetailsState {
  movieDetails: TMDBMovieDetails | undefined;
  loading: boolean;
  error: boolean;
}
