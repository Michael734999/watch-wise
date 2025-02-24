import {
  searchMoviesAsync,
  setPageNumber,
  setSearchValue,
} from '@redux/slice/MovieSearch/movieSearch.slice';
import { AppDispatch, RootState } from '@redux/store';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseMovieSearchReturn } from './MovieSearch.types';

export const useMovieSearch = (): UseMovieSearchReturn => {
  const dispatch = useDispatch<AppDispatch>();

  const { searchValue, pageNumber, searchData, loading, error } = useSelector(
    (state: RootState) => state.movieSearch
  );

  const handleMovieSearch = useCallback(() => {
    void dispatch(searchMoviesAsync({ searchValue, pageNumber }));
  }, [dispatch, searchValue, pageNumber]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setPageNumber(1));
    void handleMovieSearch();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageNumber(1));
    dispatch(setSearchValue(e.target.value));
  };

  useEffect(() => {
    void handleMovieSearch();
  }, [handleMovieSearch]);

  return {
    searchValue,
    loading,
    pageNumber,
    searchData,
    error,
    handleSubmit,
    handleSearchChange,
    setPageNumber: (value: number) => dispatch(setPageNumber(value)),
  };
};
