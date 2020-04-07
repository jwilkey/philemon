import Vue from 'vue'
import Vuex from 'vuex'
import storeGen from 'vuex-store-gen'
import VuexPersistence from 'vuex-persist'
import studyScore from './js/study-score'

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
  text: null,
  score: null
}

const storeOperations = storeGen(state)
storeOperations.getters.score = state => studyScore(state.study)

export default new Vuex.Store({
  state,
  ...storeOperations,
  plugins: [vuexLocal.plugin]
})
