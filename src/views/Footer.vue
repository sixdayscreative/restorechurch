<template>
<footer class="main">
<div class="s-grid-item">
  <div class="social">
    <a href="http://facebook.com/restorethelove" target="_blank" class="icon-link">
      <svg class="svg-icon" viewBox="0 0 26.259 26.278">
        <use xlink:href="#icon-facebook"></use>
      </svg>
    </a>
    <a href="http://instagram.com/restorethelove" target="_blank" class="icon-link">
      <svg class="svg-icon" viewBox="0 0 26.289 26.278">
        <use xlink:href="#icon-instagram"></use>
      </svg>
    </a>
  </div>
  <div class="footer-text">
    <a href="http://restoreproject.co.uk" target="_blank">part of <strong>restoreproject.co.uk</strong></a>
  </div>
</div>
<div class="s-grid-sabbath">
  <a href="http://adventist.org" target="_blank" class="icon-link">
    <svg viewBox="0 0 48.8 43.854" class="adventist-logo"><use xlink:href="#logo-adventist"></use></svg>
  </a>
</div>
</footer>
</template>

<script>
export default {
  name: 'app-footer',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';

footer{
  background: #2E2E2E;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  .icon-link{
    display: inline-block;
    padding: 0 0.5em;
    svg{
      min-width: 1.65em;
    }
  }
  .s-grid-sabbath{
    background: #000;
    text-align: center;
    svg{
      display: inline-block;
      @include xs-only{
        width: 100%;
      }
    }
  }

  .s-grid-item {
    @include xs-only{
      flex-flow: column;
      .social{
        text-align: left;
        .icon-link:first-child{
          padding-left: 0;
        }
      }
      .footer-text{
        width: 100%;
        padding: 0 1em 1em;
      }
    }
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: flex-start;
    @include min-sm{
      align-items: center;
      .social{
        width: 16.66666667%;
      }
      .footer-text{
        text-align: center;
        width: 83%;
      }
    }
    grid-column: 1 / 3;
  }

  .social{
    padding: 1em;
    justify-content: flex-start;
    .svg-icon{
      margin: 0;
    }
  }
  .footer-text{
    justify-content: center;
  }
  .s-grid-sabbath {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    grid-column: 3 / 4;
    .adventist-logo{
      height: 2em;
      width: 2em;
      display: block;
    }
  }
}

</style>
