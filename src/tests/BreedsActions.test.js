import * as action from '../actions/index';
import * as types from '../actions/action-types';

describe('actions',
  () => {
    it('should create action',
      () => {
        const error = 'nothing';
        const expectAction = { type: types.FETCH_BREEDS_ERROR, payload: error };
        expect(action.fetchBreedsRequest(error)).toEqual(expectAction);
      });
  });
