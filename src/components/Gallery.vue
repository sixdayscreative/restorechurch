<template lang="html">
  <div class="gallery">
    <h1>Instagram Photos</h1>
    <template v-for="image in instagram.data.slice(0,6)">
      <div class="gallery-photo" v-for="carousel_img in image.carousel_media" v-if="carousel_img.type === 'image'">
        <img v-bind:src="carousel_img.images.standard_resolution.url">
      </div>
      <div v-else class="gallery-photo">
        <img v-bind:src="image.images.standard_resolution.url">
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'gallery-images',
  data() {
    return {
      instagram: []
    }
  },
  created() {
    let url = `https://api.instagram.com/v1/users/self/media/recent/?count=50&access_token=6632152934.72d598a.892149b63d334769bc3bc131c9113327`;

    let $this = this;
    axios.get(url)
    .then(function (response) {
      console.log(response);
      $this.instagram = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/mixins';
  .gallery{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    h1{
      width: 100%;
      background: $color_body;
      -webkit-box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
      box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
      color: #fff;
      text-align: center;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      height: 100%;
      padding: 1em;
      -ms-align-items: center;
      align-items: center;
      justify-content: center;
    }
    @include min-sm{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: rem(5px);
    }
    @include min-md{
      grid-template-columns: 1fr 1fr 1fr;
    }
    .gallery-photo{
      display: inline-block;
      position: relative;
      -webkit-transition: transform 0.25s ease-in-out;
      -o-transition: transform 0.25s ease-in-out;
      transition: transform 0.25s ease-in-out;
      &:hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        z-index: 10;
      }
      img{
        max-width: 100%;
      }
    }
  }
</style>
