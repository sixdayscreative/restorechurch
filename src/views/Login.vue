<template lang="html">
  <section class="main">
    <section class="container-fluid">
      <div class="row center-xs">
        <div class="col-md-6">
          <h2 class="text-center">Bring church to me</h2>
          <Register></Register>
        </div>
        <div class="col-md-6">
          <h2 class="text-center">Already a host?</h2>
          <Login></Login>
        </div>
      </div>
    </section>
    <Social></Social>
  </section>
</template>

<script>
import Register from '../components/Userregister'
import Login from '../components/Userlogin'
import Social from '../components/Social'
export default {
  name: 'login',
  components: {
    Login,
    Register,
    Social
  }
}
</script>

<style lang="scss">

</style>
