import { TMDBMovieResponse } from '@services/api/tmdb/api.types';

export interface UseMovieSearchReturn {
  loading: boolean;
  searchValue: string;
  pageNumber: number;
  error: boolean;
  searchData?: TMDBMovieResponse;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPageNumber: (value: number) => {
    payload: number;
    type: 'movieSearch/setPageNumber';
  };
}
