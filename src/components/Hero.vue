<template lang="html">
  <div class="hero">
    <div class="hero-image">
      <!-- <button class="down-arrow" v-scroll-to="'#about'">
        <svg viewBox="0 0 32 32">
          <path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" d="M2,12 16,26 30,12"></path>
        </svg>
      </button> -->
    </div>
    <div class="hero-text">
      <h1 class="jumbo">Welcome friend.</h1>
      <p class="lead">We see a church unconstrained by walls and lived out in the everyday interactions of <em>real people</em>.<br> <strong><em>You are the church. We are the church. Together we make the church.</em></strong></p>
    </div>
    <div class="hero-gatherings">
      <NextGathering></NextGathering>
    </div>
    <div class="hero-quotes">
      <Cycle></Cycle>
    </div>
  </div>
</template>

<script>
import NextGathering from '@/components/NextGathering'
import Cycle from '@/components/Cycle'
export default {
  name: 'Hero',
  components: {
    NextGathering,
    Cycle
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/_variables';
  @import '../assets/scss/_mixins';

  .hero{
    color: #fff;
    margin-top: -$header-height-xs;
    text-align: center;
    position: relative;
    -webkit-background-size: auto 100%;
    background-size: auto 100%;
    .logo{
      font-size: rem(42px);
      @include min-md{
        font-size: rem(60px);
      }
    }
    &::before{
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      @include gradient;
      width: 100%;
      height: 100%;
      opacity: 0.55;
      z-index: 0;
    }
    @include min-sm{
      margin-top: -$header-height;
    }
    .hero-image{
      height: $header-height*2;
      background: url('../assets/img/sofa.jpg') no-repeat center;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .hero-text{
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -ms-align-items: center;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-flow: column;
      z-index: 10;
      font-size: rem(21px);
      padding: 2em 1em;
      &::before{
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        @include gradient;
        -webkit-background-size: 120% auto;
        background-size: 120% auto;
        width: 100%;
        height: 100%;
        opacity: 1;
        z-index: 0;
      }
      .jumbo{
        margin: 0 0 0.15em;
      }
      p{
        margin-left: auto;
        margin-right: auto;
        max-width: rem(430px);
        @media (min-width: 1640px){
          max-width: rem(532px);
        }
      }
      & > *{
        position: relative;
        z-index: 10;
      }
    }
    .hero-gatherings{
      padding: 2em rem(20px);
      // position: relative;
      background-color: $color_body;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      flex-flow: column;
      justify-content: center;
      -ms-align-items: center;
      align-items: center;
      // &::after{
      //   content: '';
      //   display: block;
      //   position: absolute;
      //   right: 0;
      //   top: 0;
      //   @include gradient;
      //   width: 100%;
      //   height: 100%;
      //   opacity: 0.35;
      //   z-index: 1;
      //   -webkit-background-size: 200% auto;
      //   background-size: 200% auto;
      // }
      // &::before{
      //   content: '';
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   width: 100%;
      //   height: 100%;
      //   z-index: 0;
      //   display: block;
      //   background: url('../assets/img/paint-bg.png') no-repeat center;
      //   -webkit-background-size: 200% auto;
      //   background-size: 200% auto;
      //   opacity: 0.25;
      // }
      // &>*{
      //   position: relative;
      //   z-index: 10;
      // }
      &>.btn{
        -webkit-box-shadow: 0 7px 10px rgba(0,0,0,0.16);
        box-shadow: 0 7px 10px rgba(0,0,0,0.16);
      }
    }
    .hero-quotes{
      padding: 2em;
      position: relative;
      background-color: $color-body;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: center;
      -ms-align-items: center;
      align-items: center;
      flex-flow: column;
      &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        display: block;
        background: url('../assets/img/paint-bg.png') no-repeat center;
        -webkit-background-size: 200% auto;
        background-size: 200% auto;
        opacity: 0.15;
      }
      &>div{
        z-index: 10;
        p{
          font-size: rem(24px);
          line-height: 1.2;
        }
      }
    }
    .down-arrow{
      display: block;
      background-color: $color_bg;
      color: $color-body;
      border-radius: 50%;
      width: rem(32px);
      height: rem(32px);
      cursor: pointer;
      border: 0;
      outline: 0;
      margin: 0 auto;
      position: absolute;
      bottom: 2em;
      -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.15);
      box-shadow: 0 3px 6px rgba(0,0,0,0.15);
      @include min-md{
        width: rem(46px);
        height: rem(46px);
      }
      svg{
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -25%;
        margin-top: -25%;
      }
    }
    @supports(display: grid){
      @include min-sm{
        display: grid;
        grid-template-columns: 1.35fr 1fr 1fr;
        grid-template-rows: 1.15fr 1fr;
        .hero-image{
          grid-area: 1 / 3 / 2 / 4;
          min-height: 100%;
        }
        .hero-text{
          padding-top: rem(70px);
          grid-area: 1 / 1 / 2 / 3;
        }
        .hero-gatherings{
          grid-area: 2 / 2 / 3 / 4;
        }
      }

      @include min-lg{
        display: grid;
        height: 80vh;
        min-height: rem(640px);
        grid-template-columns: 1fr 45% 1fr;
        grid-template-rows: 1fr 200px;
        .hero-image{
          min-height: 100%;
          grid-area: 1 / 1 / 3 / 2;
        }
        .hero-text{
          grid-area: 1 / 2 / 3 / 3;
        }
        .hero-gatherings{
          grid-area: 1 / 3 / 4 / 4;
        }
        .hero-quotes{
          grid-area: 2 / 2 / 3 / 3;
          background-color: transparent;
          justify-content: flex-end;
        }
      }

      @media (min-width: 1640px){
        max-height: rem(1000px);
        grid-template-columns: 1fr 50% 1fr;
        grid-template-rows: 1fr 400px;
      }
    }
  }
</style>
