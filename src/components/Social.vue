<template lang="html">
  <div class="social-area bg-dark">
    <div class="container-fluid">
      <h2>Connect with us</h2>
      <div class="row">
        <div class="col-xs-12 col-sm-7 col-md-6">
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
        </div>
        <div class="col-xs-12 col-sm-5 col-md-6">
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
  </div>
</template>

<script>
export default {
  name: 'social',
  components: {

  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';
.social-area {
    padding: 2em 0 1em;
    @include min-sm {
        padding: 3em 2em;
    }
    background: $color_body;
    overflow: hidden;
    position: relative;
}
</style>
