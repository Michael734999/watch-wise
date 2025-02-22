import { Film } from '@services/api/starwars/api.types';
import { ColumnDef, Row, SortingState, Table } from '@tanstack/react-table';

export interface MovieTableProps {
  movies?: Film[];
  columns?: ColumnDef<Film, unknown>[];
  loading: boolean;
}

export interface UseMovieDataReturn {
  table: Table<Film>;
  filters: {
    title: string;
  };
  handleFilterChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    column: string
  ) => void;
  paginatedData: Row<Film>[];
  sorting: SortingState;
}

export interface UseMovieDataProps {
  movies?: Film[];
}
