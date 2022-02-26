import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import cards from './cards'
// lasdkfjlsdafj
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,

  }
})
export default store