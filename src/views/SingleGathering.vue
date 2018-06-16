<template lang="html">
  <section class="main single-gathering" v-if="singleGathering.date">
    <div class="container">
<div class="card single-gathering-card">
  <div class="">
    <div class="row no-gutter">
      <div class="col-xs-12 col-sm-6 col-lg-7 text-center">
        <div class="gathering-date">
          <svg viewBox="0 0 50 50" class="svg-icon icon-2x mb-1"><use xlink:href="#icon-calendar"></use></svg>
          <div class="mb-1">
            <div class="logo">
              <svg viewBox="0 0 110.467 30"><use xlink:href="#logo"></use></svg> Church
            </div>

            <p class="lead"><span class="fz-xl">{{singleGathering.date | moment("dddd Do MMMM YYYY")}}</span></p>
          </div>
          <div class="text-center">
            <a :href="gcalLink" target="_blank" class="btn">Add to google calendar</a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-5 text-center">
        <div class="gathering-location">
          <svg viewBox="0 0 50 50" class="svg-icon icon-2x"><use xlink:href="#icon-location"></use></svg>
          <p class="lead"><span class="fz-xl">{{singleGathering.venue}}</span></p>
            <p class="fz-l lead">
              {{singleGathering.venue_address.address_line_1}}<br>
              <span v-if="singleGathering.venue_address.address_line_2">{{singleGathering.venue_address.address_line_2}}<br></span>
              {{singleGathering.venue_address.area}}<br>
              {{singleGathering.venue_address.city}}<br>
              {{singleGathering.venue_address.venue_postcode}}
            </p>
          <a :href="singleGathering.venue_address.google_maps_link" target="_blank" class="btn btn-primary">Get directions</a>
        </div>
      </div>
    </div>
    <div class="row" v-if="singleGathering.info">
      <div class="col-xs-12">
        <div class="gathering-share">
          <h3>Share with friends!</h3>
          <SocialShare v-bind:url="'https://church.restoreproject.co.uk'+$route.path" title="Restore Gathering Soon!" v-bind:description="'Can you make the Restore gathering on '+gatheringDate+'?'" v-bind:quote="'Join the upcoming Restore gathering on ' + gatheringDate"></SocialShare>
        </div>
      </div>
    </div>
    <div class="row" v-if="singleGathering.info">
      <div class="col-xs-12">
        <div class="gathering-info">
          <h5>Useful Info</h5>
          <p>{{singleGathering.info}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 mb-1">
      <router-link class="btn block-xs text-center" to="/gatherings">More dates</router-link>
    </div>
    <div class="col-xs-12 col-sm-6 end-sm">
      <a href="#" class="btn block-xs text-center"  @click.prevent="showModal = true">Got a question?</a>
    </div>
  </div>
</div>
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header"><div class="card-title">Get in touch</div> <a href="#" class="close fz-xl" @click.prevent="showModal = false"><div class="fz-xl">&times;</div></a></div>
      <div slot="body">
        <ContactForm></ContactForm>
      </div>
    </Modal>
  </section>
</template>

<script>
import Modal from '@/components/Modal'
import ContactForm from '@/components/ContactForm'
import SocialShare from '@/components/SocialShare'
export default {
  name: "single-gathering",
  components: {
    Modal,
    ContactForm,
    SocialShare
  },

  data () {
    return {
      showModal: false
    }
  },
  created () {
    this.$store.dispatch('fetchGatherings');
  },
  computed: {
    singleGathering(){
      var gathering_id = this.$route.params.id;
      if (this.$route.params.id){
        return this.$store.state.gatherings.find(x => x.id == gathering_id);
      } else {
        return this.$store.state.gatherings[0];
      }
    },
    gcalLink(){

      var data = {
        start_date: this.$moment( `${this.singleGathering.date}T${this.singleGathering.start_time}`).utc().format("YYYYMMDD[T]HHmmss[Z]"),
        end_date: this.$moment( `${this.singleGathering.date}T${this.singleGathering.end_time}`).utc().format("YYYYMMDD[T]HHmmss[Z]"),
        location: encodeURI(`${this.singleGathering.venue}, ${this.singleGathering.venue_address.city} ${this.singleGathering.venue_address.venue_postcode}`)
      }
      var calendarLink = `https://calendar.google.com/calendar/r/eventedit?text=Restore+Gathering&dates=${data.start_date}/${data.end_date}&details=For+gathering+details,+link+here:+https://church.restoreproject.co.uk/gatherings/${this.singleGathering.id}&location=${data.location}`

      return calendarLink;
    },
    gatheringDate() {
      return this.$moment(`${this.singleGathering.date}`).format("dddd Do MMMM");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_mixins';
  .logo{
    font-size: 2.75em;
  }
  .close{
    position: absolute;
    right: 1em;
    top: rem(4px);
  }
  .single-gathering{
    background: url('../assets/img/sofa-illustration.png') no-repeat, url('../assets/img/chair-illustration.png') no-repeat;
    -webkit-background-size: 25% auto, 17% auto;
    background-size: 25% auto, 17% auto;
    @include xs-only{
      -webkit-background-size: 40% auto, 25% auto;
      background-size: 40% auto, 25% auto;
      background-position: -30% -2%, 110% 0;
    }
    @include min-s{
      background-size: 20% auto, 15% auto;
      background-position: bottom left, bottom right;
    }
    @include min-md{
      background-position: 10% 90%, 90% 90%;
    }
  }
  .single-gathering-card{
    overflow: hidden;
    -webkit-box-shadow: 0 12px 50px rgba(0,0,0,0.15);
    box-shadow: 0 12px 50px rgba(0,0,0,0.15);
  }
  .gathering-date{
    padding: 1.5em 0;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    -ms-align-items: center;
    align-items: center;
    height: 100%;
  }
  .gathering-location{
    background-color: $color_bg_light;
    padding: 1.5em 0;
  }
  .gathering-share{
    padding: 1.5em;
    background-color: $color_bg_light_med;
    text-align: center;
  }
  .gathering-info{
    padding: 1.5em;
    background-color: $color_bg;
  }
</style>
