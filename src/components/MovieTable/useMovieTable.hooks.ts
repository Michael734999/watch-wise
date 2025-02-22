import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { UseMovieDataProps, UseMovieDataReturn } from './MovieTable.types';
import { Film } from '@services/api/starwars/api.types';
import moment from 'moment';

export const useMovieTable = ({
  movies,
}: UseMovieDataProps): UseMovieDataReturn => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });

  const [sorting, setSorting] = useState<SortingState>([
    { id: 'movie_id', desc: false },
  ]);

  const [filters, setFilters] = useState({
    title: '',
  });

  const columnHelper = createColumnHelper<Film>();

  const columns = [
    columnHelper.accessor('movie_id', {
      cell: (info) => info.getValue(),
      header: 'Episode',
      meta: {
        isNumeric: true,
      },
    }),
    columnHelper.accessor('title', {
      cell: (info) => info.getValue(),
      header: 'Title',
      enableColumnFilter: true,
    }),
    columnHelper.accessor('release_date', {
      cell: (info) => moment(info.getValue()).format('DD MMMM YYYY'),
      header: 'Release Date',
    }),
    columnHelper.accessor('producer', {
      cell: (info) => info.getValue(),
      header: 'Producers',
    }),
    columnHelper.accessor('director', {
      cell: (info) => info.getValue(),
      header: 'Directed by',
    }),
  ];

  const filteredData = useMemo(() => {
    return movies?.filter((movie) => {
      return movie.title.toLowerCase().includes(filters.title.toLowerCase());
    });
  }, [filters, movies]);

  const table = useReactTable({
    columns,
    data: filteredData ?? [],
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  const paginatedData = table
    .getRowModel()
    .rows.slice(
      pagination.pageIndex * pagination.pageSize,
      (pagination.pageIndex + 1) * pagination.pageSize
    );

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    column: string
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };

  return {
    sorting,
    paginatedData,
    table,
    filters,
    handleFilterChange,
  };
};
