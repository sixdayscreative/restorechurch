<template lang="html">
  <div class="card gathering-card">
    <div class="card-header icon-absolute-left">
      <svg class="svg-icon"><use xlink:href="#icon-calendar"></use></svg>
      <div class="card-title">Dates</div>
    </div>
    <ul class="card-list">
      <li v-if="!gatherings.length">
        <div class="row middle-xs">
          <div class="col-sm-5"><img src="../assets/img/sofa-illustration.png" alt=""></div>
          <div class="col-sm-7">
            <strong>Sit tight!</strong>
            <p>The next Restore Church gathering will be updated soon, please check back again later.</p>
            <div>
              <router-link to="/contact" class="btn">Get in touch</router-link>
            </div>
          </div>
        </div>
      </li>
      <li v-else v-for="gathering in gatherings">
        <router-link :to="`/gatherings/${gathering.id}`" class="gathering-item">
          <div>
            <div class="gathering-date">{{gathering.start_date | moment("dddd Do MMM")}}</div>
            <strong class="fz-s">{{`${formatDate(gathering.start_date)} ${gathering.start_time}` | moment("HH:mm")}} - {{`${formatDate(gathering.start_date)} ${gathering.end_time}` | moment("h:mma")}}</strong>
          </div>
          <div class="text-right">
            <div class="gathering-title">{{gathering.venue}}</div>
            <div>
              <strong class="fz-s">{{gathering.venue_address.area}}</strong>
            </div>
          </div>
        </router-link>
      </li>
    </ul>

    <!-- <div class="card-footer">
      <div class="row">
        <div class="col-xs-6"></div>
        <div class="col-xs-6 text-right"><a href="">More</a></div>
      </div>
    </div> -->



  </div>
</template>

<script>

export default {
  name: 'gatheringsList',
  created () {
    this.$store.dispatch('fetchGatherings');
  },
  computed: {
    gatherings(){
      return this.$store.state.gatherings
    }
  },
  methods: {
    formatDate: function(date){
      return this.$moment(date).format("YYYY-MM-DD")
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';

  .gathering-card{
    margin: 0 auto;
    -webkit-box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    @include xs-only{
      border: 0;
      border-radius: 0;
      line-height: rem(22px);
    }
    @include min-s{
      max-width: rem(600px);
    }
    .gathering-item{
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -ms-align-items: center;
      align-items: center;
      justify-content: space-between;
    }
    .gathering-title, .gathering-date{
      line-height: rem(24px);
      font-weight: normal;
      font-size: rem(18px);
    }
  }
</style>
