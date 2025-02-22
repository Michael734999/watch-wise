import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from '@providers/ColorModeProvider/ColorModeProvider';
import { ColorModeProviderProps } from '@providers/ColorModeProvider/ColorModeProvider.types';
import { system } from '@theme/theme';

export const ChakraUIProvider = (props: ColorModeProviderProps) => {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark" {...props} />
    </ChakraProvider>
  );
};
