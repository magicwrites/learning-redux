import assert from 'assert';
import * as authenticationActions from './../actions';
import authenticationReducer from './../reducer';

describe('logout process', () => {
  describe('when user data is present in the state', () => {
    const stateInitial = {
      user: {
        id: 1,
        email: 'test@test.test',
        token: 'S5kjs2PYu13'
      }
    };

    const actionForLogout = authenticationActions.logout();

    let stateAfterwards;

    before(() => {
      stateAfterwards = authenticationReducer(stateInitial, actionForLogout);
    });

    it('should clear the user data', () => {
      assert.equal(stateAfterwards.user, null);
    });
  });
});
