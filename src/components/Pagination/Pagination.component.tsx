import {
  createListCollection,
  Group,
  HStack,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from '@chakra-ui/react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@components/ui/pagination';
import { PaginationProps } from './Pagination.types';

export const Pagination = ({ table, paginatedData }: PaginationProps) => {
  const pageOptions = createListCollection({
    items: [
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '6', value: 6 },
    ],
  });

  return (
    <PaginationRoot
      count={table.getRowModel().rows.length}
      pageSize={paginatedData.length}
      defaultPage={1}
      onPageChange={(e) => table.setPageIndex(e.page - 1)}
      variant="solid"
    >
      <HStack
        gap={4}
        width="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        {paginatedData.length === 0 ? (
          'No results found'
        ) : (
          <PaginationPageText format="long" flex="1" />
        )}

        <SelectRoot
          name="select"
          width={{ base: '100%', sm: '50px' }}
          collection={pageOptions}
          position={'relative'}
          size="sm"
        >
          <SelectTrigger
            cursor={'pointer'}
            name="select-trigger"
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            {paginatedData.length}
          </SelectTrigger>
          <SelectContent
            position="absolute"
            top="100%"
            zIndex={10}
            left="0"
            alignItems={'center'}
            width="100%"
            maxHeight="200px"
            overflowY="auto"
            mt={1}
          >
            {pageOptions.items.map((option) => (
              <SelectItem
                onClick={() => table.setPageSize(option.value)}
                item={option}
                key={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>

        <Group attached flexDirection={{ base: 'column', sm: 'row' }}>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </Group>
      </HStack>
    </PaginationRoot>
  );
};
