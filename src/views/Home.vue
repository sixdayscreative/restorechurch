<template lang="html">
  <section class="main">
    <Hero></Hero>
    <section id="about" class="container-fluid about">
      <div class="row center-xs">
        <div class="col-md-6 center-xs">
          <h1>The Community</h1>
          <p class="fz-l">Restore is a vibrant community. Each week we hold intimate gatherings in community spaces or homes across Birmingham to learn together, share with and care for each other. At the core of this is a shared desire for spiritual growth through the following three principles.</p>
        </div>
      </div>

      <div class="card card-community full-width-xs">
        <div class="row no-gutter">
          <div class="col-xs-12 col-sm-6 first-sm">
            <div class="text">
              <h4>Ask Questions</h4>
              <p>We create spaces for people from different backgrounds seeking a deeper understanding of God together. In this community, all questions are welcomed and discoveries are celebrated.</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 text-center first-xs">
            <img src="../assets/img/ask.png" alt="">
          </div>
        </div>
        <div class="row no-gutter">
          <div class="col-xs-12 col-sm-6 text-center"><img src="../assets/img/develop.png" alt=""></div>
          <div class="col-xs-12 col-sm-6">
            <div class="text">
              <h4>Develop Yourself</h4>
              <p>We cherish character development. Transformation is more important than information. Developing a Christ-like a character acts as a key part of discovering purpose and meaning in our lives.</p>
            </div>
          </div>
        </div>
        <div class="row no-gutter">
          <div class="col-xs-12 col-sm-6 first-sm">
            <div class="text">
              <h4>Add your touch</h4>
              <p>Amazing things happen when a community comes together to do something for beneﬁt of the others. Here, selﬂess acts of kindness are reciprocated and a spirit of genuine and practical love is felt.</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 text-center first-xs"><img src="../assets/img/touch.png" alt=""></div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/gatherings" class="btn btn-lg block-xs">Learn more</router-link>
      </div>
    </section>
    <Social></Social>
  </section>
</template>

<script>
import Hero from '../components/Hero'
import Social from '../components/Social'
export default {
  name: 'app-home',
  components: {
    Hero,
    Social
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/_variables';
  @import '../assets/scss/_mixins';

  section.about{
    padding-top: 4em;
    padding-bottom: 4em;
    background-image: url('../assets/img/bg.png');
    background-repeat: no-repeat;
    background-position: top center;
    -webkit-background-size: 105% auto;
    background-size: 105% auto;
    position: relative;

    &::before{
      content: '';
      display: block;
      border-right: rem(20px) solid transparent;
      border-left: rem(20px) solid transparent;
      border-bottom: rem(20px) solid $color_bg;
      position: absolute;
      left: 50%;
      top: rem(-20px);
      margin-left: -20px;
      z-index: 10;
    }
  }
  .card.card-community {
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    border: 0;
    margin-bottom: rem(40px);
    @include max-s{
      img{
        max-width: 120px;
        max-height: 120px;
        margin: rem(20px) 0 rem(10px);
      }
      .row{
        padding: rem(20px);
      }
    }
    @include min-sm{
      max-width: rem(720px);
    }
    .row {
      -ms-align-items: center;
      align-items: center;
      justify-content: center;
      .text{
        padding: 1rem;
        p{
          font-size: rem(16px);
        }
        @include max-s{
          max-width: rem(360px);
          margin: 0 auto;
          text-align: center;
        }
        @include min-sm{
          padding: rem(60px);
          padding-left: 0;
          p{
            font-size: rem(18px);
          }
        }

      }
      @include min-sm{
        &> div:first-child{
          .text{
            text-align: right;
            padding-right: 0;
            padding-left: rem(60px);
          }
        }
      }
      &:nth-child(1){
        background-color: $color_bg_light_med;
      }
      &:nth-child(2){
        background-color: $color_bg_light;
      }
    }
  }
</style>
