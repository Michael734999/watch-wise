import { DataList as DList, For, SimpleGrid } from '@chakra-ui/react';
import { DataListProps } from './DataList.types';

export const DataList = ({ data }: DataListProps) => {
  return (
    <DList.Root size="lg">
      <SimpleGrid columns={[1, null, 3]} columnGap="2" rowGap="4" width="100%">
        <For each={data}>
          {(item, index) => (
            <DList.Item key={index}>
              <DList.ItemLabel>{item.label}</DList.ItemLabel>
              <DList.ItemValue textTransform={'capitalize'}>
                {item.value}
              </DList.ItemValue>
            </DList.Item>
          )}
        </For>
      </SimpleGrid>
    </DList.Root>
  );
};
