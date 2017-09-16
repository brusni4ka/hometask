export default {
  name: 'sign-up',
  data () {
    return {
      username: ''
    }
  },

  methods: {
    submit () {
      const value = this.username;
      if (value.trim()) {
        this.$store.dispatch('authorizeUser', value);
      }
      this.clear();
    },
    
    clear () {
      this.username = ''
    }
  }

}
