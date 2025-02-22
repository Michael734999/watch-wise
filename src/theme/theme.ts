import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: 'Inter, sans-serif' },
        heading: { value: 'Roboto Mono, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: '#e2e2e2', _dark: '#141414' }, // Custom dark background
          },
          subtle: {
            value: { _light: '{colors.gray.50}', _dark: '#1a1a1a' }, // Custom dark subtle background
          },
          muted: {
            value: { _light: '{colors.gray.100}', _dark: '#262626' }, // Custom dark muted background
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: '{colors.black}', _dark: '#e5e5e5' }, // Custom dark text color
          },
          muted: {
            value: { _light: '{colors.gray.600}', _dark: '#a3a3a3' }, // Custom dark muted text
          },
        },
        border: {
          DEFAULT: {
            value: { _light: '{colors.gray.200}', _dark: '#404040' }, // Custom dark border
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
