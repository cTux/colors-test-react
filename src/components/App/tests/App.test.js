import React from 'react';
import { render } from '@testing-library/react';
import { App } from '..';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mainReducer } from '../../../reducers';

test('Renders difficulty', () => {
  const { getByText } = render(
    <Provider store={createStore(mainReducer)}>
      <App />
    </Provider>
  );
  const titleElement = getByText(/Find a different color!/i);
  expect(titleElement).toBeInTheDocument();
});
