import { ThemeProvider } from 'next-themes';
import { ColorModeProviderProps } from './ColorModeProvider.types';

export const ColorModeProvider = (props: ColorModeProviderProps) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
};
