import React from 'react';
import {
  render, screen, waitFor,
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
      () => ({ type: 'FETCH_BREEDS_SUCCESS', payload: breeds })
      // // const dispatch = useDispatch();
      // dispatch(actions.fetchBreedsRequest());
      // try {
      //   // const getBreeds = await fetch('https://api.thecatapi.com/v1/breeds');
      //   // const breedsJSON = await getBreeds.json();
      //   dispatch(actions.fetchBreedsSuccess(breeds));
      // } catch (e) {
      //   dispatch(actions.fetchBreedsError(e));
      // }
      ,
    );
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
