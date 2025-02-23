import { Box } from '@chakra-ui/react';
import { Footer } from '@components/Footer/Footer.component';
import { Navbar } from '@components/Navbar';
import { Outlet } from 'react-router';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flex={1} as="main" width={'100%'}>
        <Navbar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
