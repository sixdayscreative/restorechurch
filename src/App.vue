<template>
  <div id="app" class="wrapper">
    <MainHeader v-bind:is-home="isHome()" />
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from './views/Header'
import MainFooter from './views/Footer'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  },
  data(){
    return{
      title: "Restore Community",
      isHome: function() {
        return this.$route.path === '/';
      }
    }
  }
}
</script>

<style lang="scss">

</style>
