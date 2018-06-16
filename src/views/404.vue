<template lang="html">
  <section class="main gradient-bg">
    <div class="container-fluid text-center">
      <h1 class="text-center text-light pt-3">Oops!</h1>
      <p class="lead text-light">Sorry, the page you're looking for isn't here. Maybe it's somewhere else.</p>
      <router-link to="/" class="btn btn-primary">Back to home page</router-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ContactForm from '@/components/ContactForm';

export default {
  name: "contact",
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">

</style>
