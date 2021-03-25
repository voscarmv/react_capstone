import React from 'react';
// import TestRenderer, { act } from 'react-test-renderer';
// import { act } from 'react-test-renderer';
import { render, screen, waitFor, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';

describe('App', () => {
  test('renders App component', async () => {
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { getByTestId, asFragment } = fullApp;
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
