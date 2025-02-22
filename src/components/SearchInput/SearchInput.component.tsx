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
    <Flex alignItems="center">
      <InputGroup display={'flex'} flex="1" startElement={<FaSearch />}>
        <Input
          onChange={onChange}
          value={value}
          type="search"
          name="search"
          variant={'subtle'}
          placeholder={placeholder}
        />
      </InputGroup>
    </Flex>
  );
};
