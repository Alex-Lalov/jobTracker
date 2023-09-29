import { render, screen } from '@testing-library/react';
import App from './App';

test('renders applications', () => {
  render(<App />);
  const linkElement = screen.getByText(/Applications/i);
  expect(linkElement).toBeInTheDocument();
});
