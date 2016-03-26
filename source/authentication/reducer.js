import * as authenticationActions from './actions';

const stateByDefault = {
  user: null
};

const authenticationReducer = (state = stateByDefault, action = {}) => {
  switch (action.type) {
    case authenticationActions.types.logout:
      return {
        user: null
      };
    case authenticationActions.types.login:
      if (action.username === 'test@test.test' && action.password === 'test@test.test') {
        return {
          user: { // todo: mocked, implement later
            id: 1,
            email: 'test@test.test',
            token: 'S5kjs2PYu13'
          }
        };
      } else {
        const nowAt = new Date();

        return {
          user: null,
          userRejectedAt: nowAt.toISOString()
        };
      }
    default:
      return state;
  }
};

export default authenticationReducer;
