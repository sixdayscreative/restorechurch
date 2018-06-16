<template lang="html">
  <div class="card text-left">
    <div class="card-header">
      <h3 class="card-title">Sign in</h3>
    </div>
    <div class="card-body">
      <form class="login" @submit.prevent="login">
        <div class="form-group">
          <label class="control-label">Username/Email address</label>
          <input class="form-control" required v-model="username" type="text" placeholder="Cool"/>
        </div>
        <div class="form-group">
          <label class="control-label">Password</label>
          <input class="form-control" required v-model="password" type="password" placeholder="Password"/>
        </div>
        <div class="text-right">
          <button class="btn btn-lg btn-block" type="submit" @click="submitHandler()">Log In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'user-login',
  data () {
    return {
      username: "",
      password: "",
      test: this.$router
    }
  }
  // methods: {
  //  login: function () {
  //    const { username, password } = this
  //    this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
  //      this.$router.push('/')
  //    })
  //  }
  // }
}
</script>

<style lang="scss">

</style>
