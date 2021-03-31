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
// import cat from './CatResponse';

jest.mock('../actions/index');

describe('App', () => {
  beforeEach(() => {
    actions.fetchBreeds.mockImplementation(
      () => ({ type: 'FETCH_BREEDS_SUCCESS', payload: breeds }),
    );
    actions.updateFilter.mockImplementation(
      () => ({ type: 'UPDATE_FILTER', payload: { property: 'intelligence', value: '1' } }),
    );
  });
  afterEach(() => {
    actions.fetchBreeds.mockRestore();
    actions.updateFilter.mockRestore();
  });
  test('renders filter component', async () => {
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { getByTestId, asFragment } = fullApp;
    fireEvent.click(getByTestId('breed_selector'));
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );
    fireEvent.click(getByTestId('intelligence_enable'));
    await waitFor(
      () => {
        expect(screen.getByTestId('intelligence').classList.contains('d-none')).toBe(false);
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
