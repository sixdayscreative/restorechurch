<template lang="html">
  <section class="main">
<section class="container">
  <div class="card text-left">
    <div class="card-header">
      <h3 class="card-title">Sign in</h3>
    </div>
    <div class="card-body">
      <form class="register" @submit.prevent="submitHandler">
        <div class="form-group">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <label class="control-label">First Name</label>
              <input class="form-control" required v-model="newUser.first_name" type="text" placeholder="First Name"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <label class="control-label">Last Name</label>
              <input class="form-control" required v-model="newUser.last_name" type="text" placeholder="Last Name"/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Email address</label>
          <input class="form-control" required v-model="newUser.email" type="text" placeholder="e.g. paul@apostles.com"/>
        </div>
        <div class="form-group">
          <label class="control-label">Username</label>
          <input class="form-control" required v-model="newUser.username" type="text" placeholder="e.g. apostlepaul1"/>
        </div>
        <div class="form-group">
          <label class="control-label">Password</label>
          <input class="form-control" required v-model="newUser.password" type="password" placeholder="Password"/>
        </div>
        <div class="text-right">
          <button class="btn btn-lg btn-block" type="submit" @click="submitHandler()">Let's Go!</button>
        </div>
      </form>
    </div>
  </div>
</section>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user-register',
  data() {
    return{
      newUser: {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
      },
      test: this.$router
    }
  },
  methods: {
    submitHandler: function(){
      axios.post("http://restoreproject.co.uk/wp-json/wp/v2/users/register", this.newUser)
      .then(function(response){
        console.log(response);
      })
      .catch(function(response){
        console.log(response.data);
      });
    }
  }
}
</script>

<style lang="scss">

</style>
