import { fetchStarWarsMovies } from '@services/api/starwars/api';
import { useCallback, useEffect } from 'react';
import { UseMovieDataReturn } from './Home.types';
import { AppDispatch, RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  setError,
  setLoading,
  setMoviesData,
} from '@redux/slice/Starwars/starwars.slice';
import {
  cacheMoviesData,
  getCachedMoviesData,
} from '@services/helper/cachedStarwarsData';

export const useMovieData = (): UseMovieDataReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { moviesData, loading, error } = useSelector(
    (state: RootState) => state.starwars
  );

  const getMovies = useCallback(async () => {
    try {
      dispatch(setLoading());
      const cachedData = getCachedMoviesData();
      if (cachedData) {
        dispatch(setMoviesData(cachedData));
        return;
      }

      const data = await fetchStarWarsMovies();
      dispatch(setMoviesData(data));

      cacheMoviesData(data);
    } catch {
      dispatch(setError(true));
    }
  }, [dispatch]);

  useEffect(() => {
    void getMovies();
  }, [getMovies]);

  return {
    loading,
    moviesData,
    error,
  };
};
