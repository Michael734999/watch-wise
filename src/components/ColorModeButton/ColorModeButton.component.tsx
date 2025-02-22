import { ClientOnly, IconButton, Skeleton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { ColorModeButtonProps } from './ColorModeButton.types';
import { useTheme } from 'next-themes';

export const ColorModeButton = forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        color={'white'}
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: '5',
            height: '5',
          },
        }}
      >
        {resolvedTheme === 'light' ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  );
});
