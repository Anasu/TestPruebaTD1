import Vue from 'vue'
import Vuex from 'vuex'
// js por mientras
import {apiResDestacados} from '../../dummyAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    destacados:[],
    comentarios: [],
    currArtist: {},
  },
  getters: {
    getDestacados(state) 
    {
      return state.destacados;
    },
    getComentarios(state) 
    {
      return state.comentarios;
    },
    getArtista(state)
    {
      return state.currArtist;
    }
  },
  mutations: {
    FILLDESTACADOS(state, apiRes) 
    {
      state.destacados = apiRes;
    },
    CURRENTARTIST(state, artist)
    {
      state.currArtist = artist;
    }
  },
  actions: {
    fillDestacados(context) 
    {
      let apiRes = apiResDestacados.artists.artist;

      context.commit('FILLDESTACADOS', apiRes);
    },
    currentArtist(context, artist) 
    {
      context.commit('CURRENTARTIST', artist)
    }
  },
  modules: {
  }
})
