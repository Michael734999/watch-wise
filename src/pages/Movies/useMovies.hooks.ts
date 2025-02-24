import {
  fetchMovies,
  setFilterOption,
  setPageNumber,
} from '@redux/slice/Movie/movies.slice';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterOptions, UseMoviesReturn } from './Movies.types';

export const useMovies = (): UseMoviesReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error, filterOption, pageNumber } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    if (filterOption && pageNumber) {
      void dispatch(fetchMovies({ filterOption, pageNumber }));
    }
  }, [dispatch, filterOption, pageNumber]);

  const result = useMemo(
    () => ({
      movies,
      setPageNumber: (page: number) => dispatch(setPageNumber(page)),
      loading,
      setFilterOption: (option: FilterOptions) =>
        dispatch(setFilterOption(option)),
      pageNumber,
      filterOption,
      error,
    }),
    [movies, loading, error, filterOption, pageNumber, dispatch]
  );

  return result;
};
