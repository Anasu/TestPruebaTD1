import Vue from 'vue'
import Vuex from 'vuex'
// js por mientras
import { apiCall } from '../config/apiConfig'

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
    CURRENTARTIST(state, artObj)
    {
      state.currArtist = artObj;
    },
    CLEARCURRENT(state)
    {
      state.currArtist = []
    }
  },
  actions: {
    fillDestacados(context) {
      let callTop = `method=chart.gettopartists&limit=4&page=1`

      async function apiRes () 
      {
        const apiOBJ = await (
            await apiCall(callTop)
        ).data.artists.artist;
        context.commit('FILLDESTACADOS', apiOBJ);
      }
      
      apiRes();
    },
    currentArtist(context, artist) 
    {
      context.commit('CLEARCURRENT')
      
      let callCurr = `method=artist.getinfo&mbid=${artist}`;

      async function apiRes () 
      {
        const apiOBJ = await(
          await apiCall(callCurr)
        ).data.artist;
        context.commit('CURRENTARTIST', apiOBJ)
      }

      apiRes();
    },
  },
  modules: {
  }
})
