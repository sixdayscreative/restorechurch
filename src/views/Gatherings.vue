<template lang="html">
  <section class="main">
    <div class="container-fluid">
    <div class="gatherings">
      <h1 class="text-center">Gatherings</h1>
      <gatheringsList></gatheringsList>
    </div>
      <div class="text-center">
        <h2 class="tab-title">Take a break with us</h2>
      </div>
      <div class="row center-sm">
        <div class="col-xs-12 col-sm-12 col-md-8 timetable">
          <div class="row start-sm">
            <div class="col-xs-12 col-sm-6"><h5>Our Saturday gatherings are a bit special.</h5>
            <p>Free from the hustle and bustle of the life our Saturday gatherings are a weekly space to rejuvenate, reconnect and find peace. Together we create a space of welcome and abundance through giving and sharing to replenish our minds, hearts and our bellies. Here’s what you can expect on an average week. Come through, we can’t wait to meet you.</p></div>
            <div class="col-xs-12 col-sm-6"><h6><small>12.30pm -</small> Connect over food</h6>
            <p>Food is one of the best ways to bring people together. Our gatherings start off with a bring and share lunch where you can connect with others over food and take some time to reflect on how your week has been. </p></div>
          </div>
          <div class="row start-sm">
            <div class="col-xs-12 col-sm-6"><h6><small>2.00pm -</small> Prayer &amp; Worship</h6>
            <p>Our prayer and worship is rooted in authenticity and shaped by our individual experiences with God. You can expect personalised prayer and real life testimonies blended with a healthy dose of music and creativity.</p></div>
            <div class="col-xs-12 col-sm-6"><h6><small>2.45pm -</small> Hear the word</h6>
            <p>We are captivated by the scriptures and the wisdom we can learn when we explore them through the life of Jesus. Every week we are elevated by a word shared by individuals in our community.</p></div>
          </div>
          <div class="row start-sm">
            <div class="col-xs-12 col-sm-6"><h6><small>3.15pm -</small> Talk about it</h6>
            <p>Our understanding of reality is enriched through sharing our perspectives. The discussion following the word helps us to digest and make sense of what we’ve heard, share our perspectives and ask questions about the things we are still curious about. </p></div>
            <div class="col-xs-12 col-sm-6"><h6><small>4.15 - 5.00pm -</small> Open space</h6>
            <p>Open Space is an unprogrammed time in the agenda for you you to mingle with others, begin that conversation with that person you’ve been meaning to have or hold an impromptu discussion with a small group about that question you’ve been thinking about. </p></div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 text-center no-gutter timetable-photo">
          <div class="join">
            <div>
              <router-link to="next-gathering" class="btn btn-primary">Join the next gathering</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gradient-bg">
      <div class="container-fluid pv-3">
        <gallery></gallery>
        <!-- <div class="about-gatherings-top">
          <div class="row no-gutter">
            <div class="col-xs-12 col-sm-3 col-md-2 text-center"><img src="../assets/img/home.png" alt=""></div>
            <div class="col-xs-12 col-sm-5 col-md-6">
              <h3>A church that moves</h3>
              <p>We often meet to restore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
            </div>
            <div class="col-xs-12 col-sm-4 text-center bg-dark">
              <p class="lead"><strong>Live in Birmingham?</strong></p>
              <a href="#" class="btn btn-primary">Bring church to me</a>
            </div>
          </div>
        </div> -->
        <!-- <div class="about-gatherings-bottom">
          <div class="row bg-dark">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <h3 class="title">Connect</h3>
              <p>Restore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
              <h3 class="title">Worship</h3>
              <p>Restore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
              <h3 class="title">Learn</h3>
              <p>Restore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
              <h3 class="title">Share</h3>
              <p>Restore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import gatheringsList from '../components/GatheringsList'
import gallery from '../components/Gallery'

export default {
  components: {
    gatheringsList,
    gallery
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_mixins';
  .gatherings{
    padding: 2em 0;
    background: url('../assets/img/sofa-illustration.png') no-repeat, url('../assets/img/chair-illustration.png') no-repeat;
    -webkit-background-size: 25% auto, 17% auto;
    background-size: 25% auto, 17% auto;
    @include xs-only{
      -webkit-background-size: 40% auto, 25% auto;
      background-size: 40% auto, 25% auto;
      background-position: -30% -2%, 110% 0;
      margin-left: -$xs-gutter;
      margin-right: -$xs-gutter;
    }
    @include min-s{
      background-position: top left, top right;
    }
    @include min-md{
      background-position: 10% 90%, 90% 90%;
    }
  }
  .timetable{
    @include max-s{
      max-width: rem(500px);
      margin: 0 auto;
    }
    .row{
      @include max-s{
        &>div:first-child{
          padding: $xs-gutter;
          background-color: $color_bg_light_med;
        }
        &>div:last-child{
          padding: $xs-gutter;
        }
      }
      @include min-sm{
        padding-top: $sm-gutter;
        padding-bottom: $sm-gutter;
        &:nth-child(2){
          background-color: $color_bg_light;
        }
        &:nth-child(3){
          background-color: $color_bg_light_med;
        }
      }
      @include min-md{
        padding-top: $md-gutter;
        padding-bottom: $md-gutter;
      }
      background-color: #fff;
    }
    p{
      margin-bottom: 0;
      line-height: 1.4;
      color: #666;
    }
  }
  .timetable-photo{
    flex-grow: 1;
    background: url('../assets/img/housechurch.png') center no-repeat;
    background-size: cover;
    min-height: rem(300px);
    position: relative;
    @include sm-only{
      -webkit-background-size: 50% auto;
      background-size: 50% auto;
      background-position: left;
    }
    @include max-s{
      max-width: rem(500px);
      margin: 0 auto;
    }
    .join{
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      height: 100%;
      -ms-align-items: flex-end;
      align-items: flex-end;
      justify-content: center;
      &>div{
        padding: 1em;
        background: $color_body;
        width: 100%;
      }
      @include sm-only{
        height: 100%;
        width: 100%;
        -ms-align-items: flex-end;
        align-items: flex-end;
        justify-content: flex-end;
        &>div{
          width: 50%;
          height: 100%;
          position: relative;
        }
        .btn{
          position: absolute;
          left: 50%;
          top: 50%;
          white-space: nowrap;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  .about-gatherings-bottom{
    padding: 2em;
    background-color: rgba(0,0,0,0.26);
    border-radius: 0 0 6px 6px;
  }
  .about-gatherings-top{
    border-radius: 6px;
    overflow: hidden;
    &>.row > div{
      padding: 2em;
      background-color: rgba(255,255,255,0.68);
      p:last-child{
        margin: 0;
      }
    }
    &>.row > div:last-child{
      padding: 2em;
      background-color: rgba(0,0,0,0.08);
    }
  }
</style>
