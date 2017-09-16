import * as types from '../mutation-types.js'
import * as api from '../../api'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  authorizeUser ({commit}, username) {
    commit(types.AUTHORIZE_USER_REQUEST)
    return axios.post(api.authorizeUserUrl(), {
      username
    }).then(response => {
      if (response.status === 200) {
        return response.data
      } else {
        const error = response.message
        throw new Error(error)
      }
    })
      .then(data => {
        commit(types.AUTHORIZE_USER_SUCCESS, data)
      }, error => {
        commit(types.AUTHORIZE_USER_FAILURE, error)
        throw error
      })
  },
  updateUserStatus ({commit, state}, status) {
    const {_id: id} = this.state.currentUser.info
    commit(types.UPDATE_USER_STATUS_REQUEST)
    return axios.post(api.updateUsersStatusUrl(id), {
      status
    }).then(response => {
      if (response.status === 200) {
        return response.data
      } else {
        const error = response.message
        throw new Error(error)
      }
    })
      .then(data => {
        commit(types.UPDATE_USER_STATUS_SUCCESS, data)
      }, error => {
        commit(types.UPDATE_USER_STATUS_FAILURE, error)
        throw error
      })
  }
}
