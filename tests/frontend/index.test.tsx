import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

test('renders homepage', () => {
  render(<Home />);
  const heading = screen.getByText(/Welcome to Munawara/i);
  expect(heading).toBeInTheDocument();
});
