/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});

globalThis.matchMedia =
  globalThis.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addListener: () => {},
    removeListener: () => {},
  }));

afterEach(() => {
  cleanup();
});
