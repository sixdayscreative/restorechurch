import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import VueRouter from 'vue-router'
import Routes from './routes'
import vueScrollto from 'vue-scrollto'
import VueMq from 'vue-mq'
import {store} from '@/store/store'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import SocialSharing from 'vue-social-sharing'
import VueAnalytics from 'vue-analytics'

Vue.use(VueRouter);
Vue.use(vueScrollto);
Vue.use(VueMoment, {
    moment,
});
Vue.use(SocialSharing);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next();
})

Vue.filter('removeNullProps',function(myObj) {
  return Object.keys(myObj).forEach((key) => (myObj[key] == null) && delete myObj[key]);
});

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.use(VueAnalytics, {
  id: 'UA-124232249-1',
  router
})

Vue.use(VueMq, {
  breakpoints: {
    sm: 768,
    md: 1192,
    lg: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
