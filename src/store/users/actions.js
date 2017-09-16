import * as types from '../mutation-types.js'
import * as api from '../../api'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  fetchUsers ({ commit }) {
    commit(types.FETCH_USERS_REQUEST)
    return axios.get(api.getUsersUrl())
      .then(response => {
        if (response.status === 200) {
          return response.data
        } else {
          const error = response.message
          throw new Error(error)
        }
      })
      .then(data => {
        commit(types.FETCH_USERS_SUCCESS, data)
      }, error => {
        commit(types.FETCH_USERS_FAILURE, error)
        throw error
      })
  }
}
