import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BackButton } from './BackButton.component';
import { useNavigate } from 'react-router';
import { Mock, vi } from 'vitest';
import { ChakraUIProvider } from '@providers/ChakraProvider';

vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
}));

describe('BackButton Component', () => {
  const Component = () => {
    return (
      <ChakraUIProvider>
        <BackButton />
      </ChakraUIProvider>
    );
  };
  it('should render the back button with text', () => {
    render(<Component />);

    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByTestId('ri-arrow-left-fill')).toBeInTheDocument();
  });

  it('should call navigate(-1) when clicked', async () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(<Component />);

    const backButton = screen.getByText('Back');

    fireEvent.click(backButton);

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith(-1));
  });

  it('should render Chakra UI components correctly', () => {
    render(<Component />);

    const box = screen.getByRole('button');

    expect(box).toHaveStyle('cursor: pointer');
  });
});
