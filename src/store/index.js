import Vue from 'vue'
import Vuex from 'vuex'
// js por mientras
import {apiResDestacados} from '../../dummyAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    destacados:[],
  },
  getters: {
    getDestacados(state) {
      return state.destacados
    }
  },
  mutations: {
    FILLDESTACADOS(state, apiRes) {
      state.destacados = apiRes;
    }
  },
  actions: {
    fillDestacados(context) {
      let apiRes = apiResDestacados.artists.artist;

      context.commit('FILLDESTACADOS', apiRes);
    }
  },
  modules: {
  }
})
