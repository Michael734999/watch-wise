import { createRoot } from 'react-dom/client';
import { ChakraUIProvider } from '@providers/ChakraProvider/ChakraProvider.tsx';
import { RoutesProvider } from '@providers/RoutesProvider';
import { Provider } from 'react-redux';
import store from '@redux/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraUIProvider>
      <RoutesProvider />
    </ChakraUIProvider>
  </Provider>
);
