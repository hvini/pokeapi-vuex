import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    favorites: []
  },
  getters: {
    isFavorite: (state) => (id) => {
      return state.favorites.some(x => x.id === id)
    },
    qtyOfFavorites(state) {
      return state.favorites.length
    }
  },
  mutations: {
    ADD_FAVORITE(state, payload) {
      state.favorites.push(payload)
    },
    REMOVE_FAVORITE(state, payload) {
      const idx = state.favorites.map(x => x.id).indexOf(payload.id)
      state.favorites.splice(idx, 1)
    },
    SET_POKEMONS(state, payload) {
      state.pokemons = payload
    }
  },
  actions: {
    async getPokemons({ commit }, payload) {
      const imageUrlofficial = "https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/";

      let res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=" + payload)
      const pokemons = res.data.results.map(subdata => {
        const id = subdata.url.split('/')[subdata.url.split('/').length - 2];
        return {
          id,
          ...subdata,
          imageUrl: `${imageUrlofficial}${id}.png`
        };
      });

      commit("SET_POKEMONS", pokemons)
    },
    addFavorite({ commit }, payload) {
      const fav = this.state.pokemons.find((x) => x.id === payload)
      commit('ADD_FAVORITE', fav)
    },
    removeFavorite({ commit }, payload) {
      const fav = this.state.pokemons.find((x) => x.id === payload)
      commit('REMOVE_FAVORITE', fav)
    }
  }
})
