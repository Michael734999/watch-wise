import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '@redux/slice/Starwars/starwars.slice';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect } from 'react';
import { UseStarWarsDetailsReturn } from './StarWarsDetails.types';

export const useStarWarsDetails = (id: string): UseStarWarsDetailsReturn => {
  const dispatch = useDispatch<AppDispatch>();

  const { movieDetails, movieDetailsLoading, movieDetailsError } = useSelector(
    (state: RootState) => state.starwars
  );

  useEffect(() => {
    if (id) {
      void dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id]);

  return {
    movieDetails,
    loading: movieDetailsLoading,
    error: movieDetailsError,
  };
};
