import * as types from '../mutation-types'

export default {
  [types.FETCH_USERS_REQUEST] (state) {
    state.fetching = true
    state.error = ''
  },
  [types.FETCH_USERS_SUCCESS] (state, payload) {
    state.fetching = false
    state.usersList = payload
  },
  [types.FETCH_USERS_FAILURE] (state, message) {
    state.fetching = false
    state.error = message
  }
}
