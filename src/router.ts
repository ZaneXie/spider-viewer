/**
 * Created by xiezj on 2016/12/15.
 */

import VueRouter = require('vue-router');
import Vue = require('vue');

import spider = require('./components/spider');

Vue.use(VueRouter);
const routes = [
    {
      path: '/spider/:type',
      component: spider,
      name: 'Spider'
    }
  ]
  ;

export const router = new VueRouter({
  routes,
  mode: 'history',
});
