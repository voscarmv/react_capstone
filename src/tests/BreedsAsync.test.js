import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
// eslint-disable-next-line no-unused-vars
import RegeneratorRuntime from 'regenerator-runtime';
import breeds from './BreedsResponse';
import * as action from '../actions/index';
import * as types from '../actions/action-types';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const breedsResponse = breeds;

describe('async actions',
  () => {
    afterEach(
      () => {
        fetchMock.reset();
        fetchMock.restore();
      },
    );
    it('creates FETCH_BREEDS_SUCCESS after fetchBreeds()',
      () => {
        fetchMock.getOnce(
          '/breeds',
          breedsResponse,
        );
        const expectActions = [
          { type: types.FETCH_BREEDS_REQUEST },
          { type: types.FETCH_BREEDS_SUCCESS, payload: breedsResponse },
        ];
        const store = mockStore({ breedsState: [] });
        store.dispatch(action.fetchBreeds()).then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectActions);
        });
      });
  });
