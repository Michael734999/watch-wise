import { Heading, Stack, Table, HStack, Text, Box } from '@chakra-ui/react';
import { MovieTableProps } from './MovieTable.types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useMovieTable } from './useMovieTable.hooks';
import { flexRender } from '@tanstack/react-table';
import { SearchInput } from '@components/SearchInput';
import { Loading } from '@components/Loading';
import { Pagination } from '@components/Pagination';
import { useNavigate } from 'react-router';

export const MovieTable = ({ movies, loading }: MovieTableProps) => {
  const navigate = useNavigate();
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
      <Heading size="xl" textAlign={{ base: 'center', md: 'left' }}>
        Star Wars Movies made up to date
      </Heading>
      <Box overflowX="auto">
        <Table.Root size="md" variant="outline" interactive>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
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
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <Table.Row
                  cursor={'pointer'}
                  onClick={() =>
                    void navigate(`/starwars/${row.original.movie_id}`)
                  }
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell py={4} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={table.getAllColumns().length}>
                  <Text textAlign="center" py={4}>
                    No results found
                  </Text>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </Box>
      {paginatedData.length > 0 && (
        <Pagination table={table} paginatedData={paginatedData} />
      )}
    </Stack>
  );
};
