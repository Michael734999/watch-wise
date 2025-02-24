import { fetchMovieDetails } from '@redux/slice/MovieDetails/movieDetails.slice';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseMovieDetailsReturn } from './MovieDetails.types';

export const useMovieDetails = (id: string): UseMovieDetailsReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { movieDetails, loading, error } = useSelector(
    (state: RootState) => state.movieDetails
  );

  useEffect(() => {
    if (id) {
      void dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id]);

  const trailerVideo = useMemo(() => {
    const trailer = movieDetails?.trailers?.find(
      (video) => video?.type === 'Trailer'
    );
    return trailer;
  }, [movieDetails?.trailers]);

  return {
    movieDetails,
    loading,
    trailerVideo,
    error,
  };
};
