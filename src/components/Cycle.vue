<template lang="html">
  <div class="cycle">
    <div class="cycle-slide">
      <p>
        <strong>A</strong><strong class="fz-xl"> church</strong> made up of <strong>real</strong><br><strong class="fz-l"><em> people</em></strong><strong> &ndash; not just bricks</strong>
      </p>
    </div>
    <div class="cycle-slide">
      <p class="lead">
        <strong>A</strong><strong class="fz-xl"> church</strong> for people who <br>don’t want to <strong class="fz-l"><em>&lsquo;go to church&rsquo;</em></strong>
      </p>
    </div>
  </div>
</template>

<script>
import NextGathering from '@/components/NextGathering'
export default {
  name: 'Cycle',
  methods: {
    cycle: function(){
      let slides = document.querySelectorAll(".cycle-slide");
      let activeSlide = 0;

      slides[activeSlide].classList.add("active")

      setInterval(function(){
        if(activeSlide === slides.length-1){
          activeSlide = 0;
        } else {
          activeSlide++;
        }
        slides.forEach((slide) => {
          slide.classList.remove("active");
        })
        slides[activeSlide].classList.add("active")
      }, 8000)
    }
  },
  mounted(){
     this.cycle()
  },
}
</script>

<style lang="scss">
  @import '../assets/scss/_variables';
  @import '../assets/scss/_mixins';
  .cycle{
    width: 100%;
    height: 10em;
    position: relative;
  }
  .cycle-slide{
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0%;
    opacity: 0;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-flow: column;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    height: 100%;
    -webkit-transition: opacity 1s ease-out, transform 1s ease-in-out;
    -o-transition: opacity 1s ease-out, transform 1s ease-in-out;
    transition: opacity 1s ease-out, transform 1s ease-in-out;
    -webkit-transform: translateX(-2em);
    -ms-transform: translateX(-2em);
    transform: translateX(-2em);
    &.active{
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }
  }
</style>
