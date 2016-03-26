import assert from 'assert';
import * as authenticationActions from './../actions';
import authenticationReducer from './../reducer';

describe('login process', () => {
  describe('with valid credentials', () => {
    it('should fill up the state with user data', () => {
      const stateInitial = authenticationReducer();
      const action = authenticationActions.login('test@test.test', 'test@test.test');
      const stateAfterwards = authenticationReducer(stateInitial, action);

      assert.equal(stateAfterwards.user.email, 'test@test.test');
      assert(stateAfterwards.user.id);
    });
  });

  describe('with invalid credentials', () => {
    it('should leave an error mark on the form', () => {
      const stateInitial = authenticationReducer();
      const action = authenticationActions.login('test@test.test', 'test@invalid.test');
      const stateAfterwards = authenticationReducer(stateInitial, action);

      assert.equal(stateAfterwards.user, null);
      assert.equal(stateAfterwards.form.isError, true);
    });
  });
});
