import Vue from 'vue'
import Vuex from 'vuex'
import storeGen from 'vuex-store-gen'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const state = {
  studies: [],
  book: '1john',
  studyMeta: null,
  studyIndex: 0,
  study: null,
  text: null
}

export default new Vuex.Store({
  state,
  ...storeGen(state),
  plugins: [vuexLocal.plugin]
})
