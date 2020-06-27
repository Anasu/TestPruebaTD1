import Vue from 'vue'
import Vuex from 'vuex'
// js por mientras
import { apiCall } from '../config/apiConfig'

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
      let callTop = `method=chart.gettopartists&limit=4&page=1`

      async function apiRes () {
        const apiOBJ = await (
            await apiCall(callTop)
        ).data.artists.artist;
        context.commit('FILLDESTACADOS', apiOBJ);
    }
    
    apiRes()
    }
  },
  modules: {
  }
})
