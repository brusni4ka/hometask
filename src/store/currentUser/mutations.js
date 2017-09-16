import * as types from '../mutation-types'

export default {
  [types.AUTHORIZE_USER_REQUEST] (state) {
    state.fetching = true
    state.error = ''
  },
  [types.AUTHORIZE_USER_SUCCESS] (state, payload) {
    state.fetching = false
    state.authorize = true
    state.info = payload.user
  },
  [types.AUTHORIZE_USER_FAILURE] (state, message) {
    state.fetching = false
    state.authorize = false
    state.error = message
  },
  [types.UPDATE_USER_STATUS_REQUEST] (state) {
    state.fetching = true
    state.error = ''
  },
  [types.UPDATE_USER_STATUS_SUCCESS] (state, payload) {
    state.fetching = false
    state.currentUser = payload.user
  },
  [types.UPDATE_USER_STATUS_FAILURE] (state, message) {
    state.fetching = false
    state.error = message
  }
}
