const filters = {
  all (usersList) {
    return usersList
  },
  vacation (usersList) {
    return usersList.filter((user) => user.status === 'vacation')
  },
  working (usersList) {
    return usersList.filter((user) => user.status === 'working')
  },
  username (usersList, username) {
    var reg = RegExp(`^${username}\w*`, 'i');
    console.log(reg);
    return usersList.filter((user) => reg.test(user.username))
  }

}

export default {
  name: 'vacation',
  data () {
    return {
      status: this.user.status,
      filterByStatus: true,
      filterByUsername: false,
      filterStatus:'all',
      username: '',
      options: [
        { text: 'Vacation', value: 'vacation' },
        { text: 'Working', value: 'working' }
      ],
    }
  },
  props: ['usersList', 'user'],

  computed: {
    filteredUsers () {
      if (this.username) {
        return filters.username(this.usersList, this.username)
      }
      return filters[this.filterStatus](this.usersList)
    },

    userStatusTitle () {
      return this.status === 'working' ? `${this.status}` : `on ${this.status}`
    }
  },

  methods: {
    updateStatus () {
      const status = this.status
      this.$store.dispatch('updateUserStatus', status);
    }
  }

}
