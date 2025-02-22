import { FilterOptions } from '@pages/Movies/Movies.types';

export interface MoviesHeaderProps {
  setFilterOption: (option: FilterOptions) => {
    payload: FilterOptions;
    type: 'movies/setFilterOption';
  };
  setPageNumber: (page: number) => {
    payload: number;
    type: 'movies/setPageNumber';
  };
  filterOption: FilterOptions;
}
