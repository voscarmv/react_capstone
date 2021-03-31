import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';

// Only run this test while connected to the internet.
// This test has been deactivated by default.
// To re-activate it, rename this to *.test.js
// This test is here to make sure the API is still compatible with the app.

describe('App', () => {
  test('renders Cat component', async () => {
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { getByTestId, asFragment } = fullApp;
    fireEvent.click(getByTestId('breed_selector'));
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );
    fireEvent.click(getByTestId('aege'));
    await waitFor(
      () => {
        expect(screen.getByText('Wikipedia page'));
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
