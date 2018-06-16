<template lang="html">
  <social-sharing v-bind:url="url ? url : 'https://church.restoreproject.co.uk'"
                      v-bind:title="title ? title : 'Restore Church Birmingham'"
                      v-bind:description="description ? description : 'We see a church unconstrained by walls and lived out in the everyday interactions of real people.'"
                      v-bind:quote="quote ? quote : 'You are the church. We are the church. Together we make the church.'"
                      inline-template>
  <div>
    <network network="whatsapp">
      <div class="share">
        <svg class="svg-icon" viewBox="0 0 448 512"><use xlink:href="#icon-whatsapp"></use></svg> Whatsapp
      </div>
    </network>
    <network network="facebook">
      <div class="share">
        <svg class="svg-icon" viewBox="0 0 50 50"><use xlink:href="#icon-facebook"></use></svg> Facebook
      </div>
    </network>
  </div>
</social-sharing>
</template>

<script>
export default {
  name: 'social-share',
  components: {

  },
  props: {
    url: String,
    title: String,
    description: String,
    quote: String
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';

.share{
  display: inline-block;
  background: #fff;
  color: #000;
  padding: rem(10px) rem(20px);
  border-radius: 6px;
  margin: 0 rem(5px);
  border: 2px solid transparent;
  -webkit-transition: border-color 0.2s ease-out;
  -o-transition: border-color 0.2s ease-out;
  transition: border-color 0.2s ease-out;
  @include xs-only{
    display: block;
    margin: 0;
    margin-bottom: 10px;
  }
  cursor: pointer;
  .svg-icon{
    margin-right: 1em;
  }
  &:hover, &:focus{
    border: 2px solid #ccc;
  }
  &:active{
    background-color: #f1f1f1;
    border-color: #aaa;
  }
}
</style>
