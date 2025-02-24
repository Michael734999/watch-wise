import { render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { Home } from './Home.page';
import { useMovieData } from './useMovieData.hooks';
import { ChakraUIProvider } from '@providers/ChakraProvider';
import { BrowserRouter } from 'react-router';

vi.mock('./useMovieData.hooks');

describe('Home component', () => {
  const Component = () => {
    return (
      <BrowserRouter>
        <ChakraUIProvider>
          <Home />
        </ChakraUIProvider>
      </BrowserRouter>
    );
  };

  it('should render Error component when there is an error', () => {
    (useMovieData as Mock).mockReturnValue({
      moviesData: undefined,
      loading: false,
      error: true,
    });

    render(<Component />);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('should render MovieTable with movies data when data is loaded', async () => {
    const mockMovies = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ];

    (useMovieData as Mock).mockReturnValue({
      moviesData: mockMovies,
      loading: false,
      error: false,
    });

    render(<Component />);

    await waitFor(() =>
      expect(screen.getByText('Movie 1')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText('Movie 2')).toBeInTheDocument()
    );
  });

  it('should render the correct Flex container', () => {
    (useMovieData as Mock).mockReturnValue({
      moviesData: undefined,
      loading: false,
      error: false,
    });

    render(<Component />);

    const flexContainer = screen.getByTestId('flex-container');
    expect(flexContainer).toBeInTheDocument();
    expect(flexContainer).toHaveStyle('height: 100%');
    expect(flexContainer).toHaveStyle('width: 100%');
    expect(flexContainer).toHaveStyle('align-items: center');
    expect(flexContainer).toHaveStyle('justify-content: center');
  });
});
