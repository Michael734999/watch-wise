import { searchMovies } from '@services/api/tmdb/api';
import { TMDBMovieResponse } from '@services/api/tmdb/api.types';
import { useCallback, useEffect, useState } from 'react';

export const useMovieSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchData, setSearchData] = useState<TMDBMovieResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleMovieSearch = useCallback(async () => {
    try {
      setLoading(true);
      const res = await searchMovies(searchValue, pageNumber);
      setSearchData(res);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [pageNumber, searchValue]);

  useEffect(() => {
    void handleMovieSearch();
  }, [handleMovieSearch]);

  return {
    searchValue,
    loading,
    pageNumber,
    searchData,
    error,
    setSearchValue,
    handleMovieSearch,
    setPageNumber,
  };
};
