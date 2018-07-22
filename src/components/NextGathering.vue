<template>
<div class="upcoming-gathering">
  <div class="card" v-if="nextGathering">
    <div class="card-header">
      <h3 class="card-title">Next Gathering</h3>
      <router-link to="gatherings" class="more">more dates</router-link>
    </div>
    <router-link to="/next-gathering">
      <ul class="card-list">
        <li class="gathering-date">
          <svg class="svg-icon absolute-left"><use xlink:href="#icon-calendar"></use></svg> <span>{{nextGathering.start_date | moment("dddd Do MMM")}}</span>
          <strong>{{`${gatheringDate} ${nextGathering.start_time}` | moment("h:mm")}} - {{`${gatheringDate} ${nextGathering.end_time}` | moment("h:mma")}}</strong>
        </li>
        <li class="gathering-location">
          <svg class="svg-icon absolute-left"><use xlink:href="#icon-location"></use></svg> {{nextGathering.venue}}
          <strong>{{nextGathering.venue_address.area}}</strong>
        </li>
      </ul>
    </router-link>
  </div>
  <div class="text-center" v-if="nextGathering">
    <router-link  to="/next-gathering" class="btn btn-lg block-xs">Take a break with us</router-link>
  </div>
  <div class="text-center" v-else="">
    <router-link to="/gatherings" class="btn btn-lg block-xs">Take a break with us</router-link>
  </div>
</div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'nextGathering',
    created () {
      this.$store.dispatch('fetchGatherings');
    },
    computed: {
      nextGathering(){
        return this.$store.state.gatherings[0]
      },
      gatheringDate(){
        const date = this.nextGathering.start_date
        return this.$moment(date).format("YYYY-MM-DD")
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';
  .upcoming-gathering{
    width: 100%;
    color: $color-body;
    position: relative;
    z-index: 10;
    margin: 0 auto 1em;
    text-align: left;
    .card-list li{
      @include icon-left;
    }
    .more{
      position: absolute;
      right: 1em;
      top: 50%;
      margin-top: -0.5em;
      line-height: 1;
      font-weight: bold;
      color: $color_secondary;
    }
    @include min-sm{
      margin-bottom: 2rem;
    }
    max-width: rem(500px);
    .gathering-location, .gathering-date{
      font-size: rem(20px);

      strong{
        display: block;
        font-size: rem(16px);
        margin-top: 0.35em;
      }
    }
  }
</style>
