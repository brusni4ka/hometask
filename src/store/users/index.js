import actions from './actions'
import mutations from './mutations'

const state = {
  usersList: [],
  error: null,
  fetching: false
}

export default {
  state,
  actions,
  mutations
}
