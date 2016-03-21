import * as authenticationActions from './actions'

const authenticationReducer = (state = { user: null, form: { email: '', password: '' } }, action = {}) => {
  switch (action.type) {
    case authenticationActions.types.logout:
      return {
        user: null,
        form: { // todo: should this be a part of the state, or we hide it in react components?
          email: '',
          password: ''
        }
      }
    case authenticationActions.types.login:
      if (action.username === 'test@test.test' && action.password === 'test@test.test') {
        return {
          user: { // todo: mocked, implement later
            id: 1,
            email: 'test@test.test',
            token: 'S5kjs2PYu13'
          },
          form: {
            email: '',
            password: ''
          }
        }
      } else {
        return {
          user: null,
          form: Object.assign({}, state.form, {
            isError: true
          })
        }
      }
    default:
      return state
  }
}

export default authenticationReducer
