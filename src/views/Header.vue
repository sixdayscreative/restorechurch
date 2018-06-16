<template>
<header class="main" v-bind:class="{home: isHome}" v-scroll="handleScroll">
  <h1>
    <router-link class="logo" to="/">
      <svg viewBox="0 0 110.467 30"><use xlink:href="#logo"></use></svg> Church
    </router-link>
  </h1>
  <button class="nav-btn" @click="toggleMenu()" v-bind:class="{nav_is_open: menuIsOpen}"><span></span></button>
  <transition name="nav">
    <nav class="main" v-if="menuIsOpen || $mq < 'sm'" @click="toggleMenu()">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gatherings">Gatherings</router-link></li>
        <li><router-link to="/contact">Get in touch</router-link></li>
      </ul>
    </nav>
  </transition>
</header>
</template>

<script>
export default {
  name: 'app-header',
  props: ['isHome'],
  data() {
    return {
      menuIsOpen: false,
      current: function(){
        return window.location.pathname;
      },
      test: this.$router.currentRoute.fullPath
    }
  },
  methods: {
    toggleMenu: function(){
      this.menuIsOpen = !this.menuIsOpen;
    },
    handleScroll: function(evt, el) {
      if(this.$mq === "xs"){
        if(window.scrollY > 100){
          el.classList.add('sticky');
          document.querySelector('.wrapper').setAttribute('style', 'padding-top: 50px')
        }
        else {
          el.classList.remove('sticky');
          document.querySelector('.wrapper').setAttribute('style', 'padding-top: 0px')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';

header {
  width: 100%;
  z-index: 100;
  padding: 0.5em 0 0.5em rem(15px);
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
  height: $header-height-xs;
  color: $color_body;
  -webkit-transition: color 0.2s ease-out, transform 0.3s ease-out;
  -o-transition: color 0.2s ease-out, transform 0.3s ease-out;
  transition: color 0.2s ease-out, transform 0.3s ease-out;
  position: relative;
  &.home:not(.sticky){
    color: #fff;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
    background: -moz-linear-gradient(top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }
  @include max-s{
    &.sticky{
      position: fixed;
      bottom: 100%;
      left: 0;
      -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
      transform: translateY(100%);
      background-color: $color_bg;
      -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.15);
      box-shadow: 0 3px 6px rgba(0,0,0,0.15);
    }
  }
  h1 {
    line-height: 2rem;
    font-size: rem(32px);
    margin: 0;
    color: currentColor;
  }
  @include min-sm{
    padding: 0.5em 1em;
    height: $header-height;
    h1{
      font-size: rem(42px)
    }
  }
}

$btn-size: rem(76px);
.nav-btn{
  border: 0;
  font-size: 0;
  position: relative;
  z-index: 10;
  background-color: transparent;
  width: $btn-size;
  height: $header-height-xs;
  outline: 0;
  overflow: hidden;
  color: currentColor;
  span{
    background-color: currentColor;
    height: rem(3px);
    width: $btn-size*.375;
    display: block;
    margin: 0 auto;
    position: relative;
    border-radius: 2px;
    &::before, &::after{
      content: '';
      background-color: currentColor;
      height: rem(3px);
      width: $btn-size*.375;
      display: block;
      border-radius: 2px;
      position: absolute;
      transform: translateY($btn-size*.125);
      -webkit-transition: transform 0.2s ease-in-out;
      -o-transition: transform 0.2s ease-in-out;
      transition: transform 0.2s ease-in-out;
    }
    &::before{
      transform: translateY(-$btn-size*.125);
    }
  }
  &.nav_is_open{
    span{
      background-color: transparent;
      &::before{
        transform: rotate(45deg) scale(0.75);
      }
      &::after{
        transform: rotate(-45deg) scale(0.75);
      }
    }
  }
  &::before{
    content: '';
    display: block;
    height: $btn-size;
    width: $btn-size;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    margin: -$btn-size/2;
    opacity: 0;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transition: opacity 0.1s ease-out, transform 0.2s ease-out;
    -o-transition: opacity 0.1s ease-out, transform 0.2s ease-out;
    transition: opacity 0.1s ease-out, transform 0.2s ease-out;
  }
  &::after{
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.35);
    height: 100vh;
    width: 100vw;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.25 ease-out;
    -o-transition: opacity 0.25 ease-out;
    transition: opacity 0.25 ease-out;
  }
  &:active, &:focus{
    &::before{
      opacity: 0.35;
      -webkit-transform: scale(0.65);
      -ms-transform: scale(0.65);
      transform: scale(0.65);
    }
  }
  &.nav_is_open{
    &::before{
      opacity: 1;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
    &::after{
      visibility: visible;
      opacity: 1;
    }
  }
  @include min-sm{
    display: none;
  }
}

@keyframes grow_in {
  from{
    opacity: 0;
    -webkit-transform: scale(0.65) translateY(rem(-30px));
    -ms-transform: scale(0.65) translateY(rem(-30px));
    transform: scale(0.65) translateY(rem(-30px));
  }
  to{
    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}


nav {
  @include max-s {
    position: absolute;
    -webkit-transform-origin: top right;
    -moz-transform-origin: top right;
    -ms-transform-origin: top right;
    -o-transform-origin: top right;
    transform-origin: top right;
    right: 0;
    top: 100%;
    z-index: 1000;

    ul{
      border: 3px solid #fff;
      border-radius: 6px;
      min-width: rem(180px);
      -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.16);
      box-shadow: 0 5px 10px rgba(0,0,0,0.16);
      li{
        background-color: $color_bg_light_med;
        &:nth-child(even){
          background-color: $color_bg;
        }
        a{
          display: block;
          padding: 1em;
          color: #000;
        }
      }
    }
    &.nav-enter-active{
      -webkit-animation: grow_in forwards 0.15s ease-out;
      animation: grow_in forwards 0.15s ease-out;
    }
    &.nav-leave-active{
      -webkit-animation: grow_in reverse 0.1s ease-out;
      animation: grow_in reverse 0.1s ease-out;
    }
  }
  @include min-sm{
    ul {
        display: inline-block;
        li {
            display: inline-block;
            margin-left: 2em;
            a {
                font-size: rem(16px);
                height: rem(30px);
                padding: rem(6px) 1rem;
                border-radius: rem(15px);
                display: block;
                line-height: 1;
                &:hover{
                  background-color: rgba(0,0,0,0.1);
                }
                &.router-link-exact-active{
                  background-color: #fff;
                  color: #000;
                }
            }
        }
    }
  }
}
</style>
