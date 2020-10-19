import Vue from 'vue'
export default new Vue({
  methods: {
    clickUser(user) {
      this.$emit('userClick',user)
    },
    showUser(callback) {
      this.$on('userClick',callback)
    }
  }
})