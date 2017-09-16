import actions from './actions'
import mutations from './mutations'

const state = {
  info: {},
  authorize: false,
  error: null,
  fetching: false
}

export default {
  state,
  actions,
  mutations
}
