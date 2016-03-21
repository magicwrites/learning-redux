import assert from 'assert'
import * as authenticationActions from './../actions'
import authenticationReducer from './../reducer'

describe('logout process', () => {
  describe('when user data is present in the state', () => {
    it('should clear the user data', () => {
      let stateInitial = {
        user: {
          id: 1,
          email: 'test@test.test',
          token: 'S5kjs2PYu13'
        },
        form: {
          email: '',
          password: ''
        }
      }

      let actionForLogout = authenticationActions.logout()
      let stateAfterwards = authenticationReducer(stateInitial, actionForLogout)

      assert.equal(stateAfterwards.user, null)
    })
  })
})
