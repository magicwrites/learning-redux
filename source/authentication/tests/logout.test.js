import assert from 'assert';
import * as authenticationActions from './../actions';
import authenticationReducer from './../reducer';

describe('logout process', () => {
  describe('when user data is present in the state', () => {
    it('should clear the user data', () => {
      const stateInitial = {
        user: {
          id: 1,
          email: 'test@test.test',
          token: 'S5kjs2PYu13'
        },
        form: {
          email: '',
          password: ''
        }
      };

      const actionForLogout = authenticationActions.logout();
      const stateAfterwards = authenticationReducer(stateInitial, actionForLogout);

      assert.equal(stateAfterwards.user, null);
    });
  });
});
