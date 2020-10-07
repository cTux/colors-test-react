import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { StartScreen } from '..';
import { mainReducer } from '../../../reducers';

describe('StartScreen', () => {
  it('Renders Start Screen', () => {
    const { getByText } = render(
      <Provider store={createStore(mainReducer)}>
        <StartScreen />
      </Provider>
    );
    const titleElement = getByText(/Find a different color!/i);
    expect(titleElement).toBeInTheDocument();
  });
});
