import { Flex, Input } from '@chakra-ui/react';
import { InputGroup } from '@components/ui/input-group';
import { FaSearch } from 'react-icons/fa';
import { SearchInputProps } from './SearchInput.types';

export const SearchInput = ({
  value,
  onChange,
  placeholder,
}: SearchInputProps) => {
  return (
    <Flex alignItems="center" width="100%" px={{ base: 4, sm: 6 }}>
      <InputGroup
        display={'flex'}
        flex="1"
        startElement={<FaSearch />}
        width="100%"
      >
        <Input
          onChange={onChange}
          value={value}
          type="search"
          name="search"
          variant={'subtle'}
          placeholder={placeholder}
          width="100%"
          py={{ base: 2, sm: 3 }}
        />
      </InputGroup>
    </Flex>
  );
};
