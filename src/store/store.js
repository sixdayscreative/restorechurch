import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

//const URL = "http://localhost/restoreproject/wp-json";
const URL = "https://restoreproject.co.uk/wp-json";

export const store = new Vuex.Store({
  state: {
    gatherings: [],
    loading: true
  },
  actions: {
    fetchGatherings ({commit}) {
      axios.get(`${URL}/upcoming_gatherings/v2/gatherings`)
      .then(response => {
        commit("updateGatherings", response.data)
        commit("changeLoadingState", false)
      })
    }
  },
  mutations: {
    updateGatherings(state, gatherings) {
      state.gatherings = gatherings
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  }
});
