import { Film } from '@services/api/starwars/api.types';
import { Row, Table } from '@tanstack/react-table';

export interface PaginationProps {
  table: Table<Film>;
  paginatedData: Row<Film>[];
}
