import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon heading', () => {
  render(<App />);
  const heading = screen.getByText(/Little Lemon/i);
  expect(heading).toBeInTheDocument();
});