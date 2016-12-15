/**
 * Created by xiezongjun on 2016-12-15.
 */

import Vuex = require('vuex');
import Vue = require('vue');
Vue.use(Vuex);
const state = {
  count: 1
};

const mutations = {
  increment (state) {
    state.count++
  }
};

export const store = new Vuex.Store({
  state,
  mutations,
});
