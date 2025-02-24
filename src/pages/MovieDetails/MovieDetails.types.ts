import { TMDBMovieDetails, Video } from '@services/api/tmdb/api.types';

export interface UseMovieDetailsReturn {
  loading: boolean;
  error: boolean;
  trailerVideo?: Video;
  movieDetails?: TMDBMovieDetails;
}
