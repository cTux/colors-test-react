import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('Renders difficulty', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Press "Start"!/i);
  expect(titleElement).toBeInTheDocument();
});
