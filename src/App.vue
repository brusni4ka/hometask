<template>
  <div id="app">
    <vacation v-if="authorize"
              :usersList="usersList"
              :user="currentUser"
    ></vacation>
    <sign-up v-else></sign-up>
  </div>
</template>

<script>
  import SignUp from './components/SignUp/signup.vue'
  import Vacation from './components/Vacation/vacation.vue'
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'app',
    components: {
      'sign-up': SignUp,
      'vacation': Vacation
    },
    computed: {
      ...mapState({
        usersList: state => state.users.usersList,
        authorize: state => state.currentUser.authorize,
        currentUser: state => state.currentUser.info
      })
    },

    watch: {
      authorize: function (newQuestion) {
        if (this.authorize) {
          this.$store.dispatch('fetchUsers')
        }
      }
    }
  }
</script>

<style>

  body {
    background: url(/static/img/background.7b00cc9.jpg) no-repeat center center fixed;
    background-size: cover;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  .logo {
    position: absolute;
    top: -50px;
    right: -50px;
  }

  input[type="text"] {
    padding: 15px;
    width: 260px;
  }

  button.btn {
    background-color: #00c881;
    border: 2px solid #00c881;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 15px 40px;
  }

  button.btn:hover {
    background-color: inherit;
    color: #212020;
  }

  select {
    background-color: #fff;
    color: #00c881;
    cursor: pointer;
    padding: 15px 25px;
    font-weight: 700;
    letter-spacing: 1px;
    display:inline-block;
  }

  .light-block {
    position: relative;
    padding: 3%;
    background-color: rgba(255, 255, 255, 0.93);
  }


</style>
