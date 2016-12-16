/**
 * Created by xiezongjun on 2016-12-15.
 */

import Vuex = require('vuex');
import Vue = require('vue');
import {PageManager} from "./managers/page";
Vue.use(Vuex);

let complexManager = new PageManager();
const state = {
  count: 1,
  complex: complexManager,
}

const mutations = {
  increment (state) {
    state.count++
  }
};

const actions = {
  refreshComplex(context, page?: number) {
    state.complex.refresh(page);
  },
}

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});


