import assert from 'assert';
import * as authenticationActions from './../actions';
import authenticationReducer from './../reducer';

describe('login process', () => {
  describe('with valid credentials', () => {
    const stateInitial = authenticationReducer();
    const action = authenticationActions.login('test@test.test', 'test@test.test');
    let stateAfterwards;

    before(() => {
      stateAfterwards = authenticationReducer(stateInitial, action);
    });

    it('should fill up the state with user data', () => {
      assert.equal(stateAfterwards.user.email, 'test@test.test');
      assert(stateAfterwards.user.id);
    });

    it('should not leave any rejection date for the user', () => {
      assert.equal(stateAfterwards.userRejectedAt, null);
    });
  });

  describe('with invalid credentials', () => {
    const stateInitial = authenticationReducer();
    const action = authenticationActions.login('test@test.test', 'test@invalid.test');
    let stateAfterwards;

    before(() => {
      stateAfterwards = authenticationReducer(stateInitial, action);
    });

    it('should not set any user data', () => {
      assert.equal(stateAfterwards.user, null);
    });

    it('should leave a new user rejection date on the state', () => {
      assert(new Date(stateAfterwards.userRejectedAt).toISOString());
    });
  });
});
