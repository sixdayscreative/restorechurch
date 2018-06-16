<template lang="html">
  <section class="main gradient-bg">
    <div class="container-fluid">
      <h1 class="text-center text-light pt-1 left-xs">Get in touch</h1>
      <div class="row center-xs between-md">
        <div class="col-xs-12 col-sm-8 col-md-6 text-left">
          <h2 class="text-light">Got Questions?</h2>
          <p class="fz-l text-light">Fill out the details below and one of the team will get back to you as soon as possible.</p>
          <ContactForm></ContactForm>
        </div>
        <div class="text-light col-xs-12 col-md-5 text-left bg-shade">
          <h2>Connect with us</h2>
              <!-- Begin MailChimp Signup Form -->
              <div id="mc_embed_signup" class="mb-1">
              <form action="https://restoreproject.us17.list-manage.com/subscribe/post?u=22671e82ba3d57108c48af77b&amp;id=393a51c643" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                	<label for="mce-EMAIL" class="control-label">Subscribe to our mailing list</label>
                	<div class="input-group">
                    <input type="email" value="" name="EMAIL" class="form-control" id="mce-EMAIL" placeholder="email address" required>
                                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_22671e82ba3d57108c48af77b_393a51c643" tabindex="-1" value=""></div>
                    <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary">Sign up</button>
                  </div>
                </div>
              </form>
            </div>
            <p class="fz-l">
              <a href="http://facebook.com/restorethelove" target="_blank">
                <svg class="svg-icon">
                  <use xlink:href="#icon-facebook"></use>
                </svg>&nbsp; /restorethelove
              </a>
            </p>
            <p class="fz-l">
              <a href="http://instagram.com/restorethelove" target="_blank">
                <svg class="svg-icon">
                  <use xlink:href="#icon-instagram"></use>
                </svg>&nbsp; @restorethelove
              </a>
            </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/ContactForm';

export default {
  name: "contact",
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
@import "../assets/scss/mixins";
@include xs-only{
  .left-xs{
    text-align: left !important;
  }
}
@include max-sm{
  .bg-shade{
    padding: 1.5em;
    background-color: rgba(0,0,0,0.25);
  }
}
</style>
