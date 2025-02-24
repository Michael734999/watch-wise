import {
  Flex,
  For,
  Heading,
  Text,
  List,
  Separator,
  SimpleGrid,
} from '@chakra-ui/react';
import { SectionProps } from './Section.types';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export const Section = <T extends string | number | object | undefined>({
  title,
  data,
  isClickable = false,
  description,
  hasSeperator = false,
}: SectionProps<T>) => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    async (item: T, name: string) => {
      if (!isClickable) return;
      await navigate(`/starwars/characters/${name}`, { state: item });
    },
    [isClickable, navigate]
  );

  return (
    <Flex flexDirection="column" justifyContent={'center'}>
      <Heading textTransform={'uppercase'} py={4}>
        {title}
      </Heading>
      {description && <Text fontSize={'sm'}>{description}</Text>}
      {data && (
        <List.Root ml={4} width="100%" display="flex" justifyContent="center">
          <SimpleGrid
            columns={[1, null, 3]}
            columnGap="2"
            rowGap="4"
            width="100%"
          >
            <For each={data}>
              {(item, index) => (
                <List.Item
                  fontSize={'sm'}
                  onClick={() =>
                    void handleOnClick(
                      item,
                      (item as unknown as { name: string }).name
                    )
                  }
                  textDecoration={isClickable ? 'underline' : 'none'}
                  _hover={{
                    fontWeight: isClickable ? 'semibold' : 'normal',
                  }}
                  cursor={isClickable ? 'button' : 'auto'}
                  key={index}
                >
                  {(item as unknown as { name: string }).name}
                </List.Item>
              )}
            </For>
          </SimpleGrid>
        </List.Root>
      )}
      {hasSeperator && <Separator width={'100%'} mt={10} size="lg" />}
    </Flex>
  );
};
