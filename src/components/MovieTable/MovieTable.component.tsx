import { Heading, Stack, Table, HStack } from '@chakra-ui/react';
import { MovieTableProps } from './MovieTable.types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useMovieTable } from './useMovieTable.hooks';
import { flexRender } from '@tanstack/react-table';
import { NavLink } from 'react-router';
import { SearchInput } from '@components/SearchInput';
import { Loading } from '@components/Loading';
import { Pagination } from '@components/Pagination';

export const MovieTable = ({ movies, loading }: MovieTableProps) => {
  const { table, paginatedData, handleFilterChange, filters } = useMovieTable({
    movies,
  });

  if (!movies || loading) return <Loading />;

  return (
    <Stack width="90%" pt="10" mb={10} gap="5">
      <SearchInput
        placeholder="Search by title"
        value={filters.title}
        onChange={(e) => handleFilterChange(e, 'title')}
      />
      <Heading size="xl">Star Wars Movies made up to date</Heading>
      <Table.Root size="sm" variant="line" striped interactive>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.ColumnHeader
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    fontWeight={'bold'}
                  >
                    <HStack>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <FaChevronDown aria-label="sorted descending" />
                        ) : (
                          <FaChevronUp aria-label="sorted ascending" />
                        )
                      ) : null}
                    </HStack>
                  </Table.ColumnHeader>
                );
              })}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {paginatedData.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <Table.Cell py={4} key={cell.id}>
                    <NavLink to={`starwars/${row.original.movie_id}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </NavLink>
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination table={table} paginatedData={paginatedData} />
    </Stack>
  );
};
