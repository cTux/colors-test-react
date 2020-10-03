import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('Renders difficulty', () => {
  const { getByText } = render(<App />);
  const difficultyElement = getByText(/Difficulty/i);
  expect(difficultyElement).toBeInTheDocument();
});
