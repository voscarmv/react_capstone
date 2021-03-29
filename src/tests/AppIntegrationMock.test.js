import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';
import * as actions from '../actions/index';
import breeds from './BreedsResponse';
import combineReducers from '../reducers/index';

const mockStore = configureMockStore([combineReducers, thunk]);

jest.mock('../actions/index');
jest.mock('../store/index');

describe('App', () => {
  beforeEach(() => {
    actions.fetchBreeds.mockImplementation(
      async () => dispatch => dispatch(actions.fetchBreedsSuccess(breeds)),
    );
    store.store = mockStore;
  });
  afterEach(() => {
    actions.fetchBreeds.mockRestore();
  });
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
