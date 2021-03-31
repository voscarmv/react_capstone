import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';
import * as actions from '../actions/index';
import breeds from './BreedsResponse';

jest.mock('../actions/index');

describe('App', () => {
  beforeEach(() => {
    actions.fetchBreeds.mockImplementation(
      () => ({ type: 'FETCH_BREEDS_SUCCESS', payload: breeds }),
    );
  });
  afterEach(() => {
    actions.fetchBreeds.mockRestore();
  });
  test('renders App component', async () => {
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { getByTestId, asFragment } = fullApp;
    fireEvent.click(getByTestId('breed_selector'));
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
