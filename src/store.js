import Vue from 'vue'
import Vuex from 'vuex'
import storeGen from 'vuex-store-gen'

Vue.use(Vuex)

const state = {
  studyIndex: 0,
  study: null,
  text: null
}

export default new Vuex.Store({
  state,
  ...storeGen(state)
})
