import * as action from '../actions/index';
import * as types from '../actions/action-types';

describe('actions',
  () => {
    it('should create action',
      () => {
        const expectAction = { type: types.FETCH_BREEDS_REQUEST };
        expect(action.fetchBreedsRequest()).toEqual(expectAction);
      });
  });
