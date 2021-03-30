import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';

// Only run this test while connected to the internet.
// This test has been disactivated by default.
// To re-activate it, rename this to *.test.js
// This test is here to make sure the API is still compatible with the app.

describe('App', () => {
  test('renders App component', async () => {
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { asFragment } = fullApp;
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
