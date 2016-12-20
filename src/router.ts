/**
 * Created by xiezj on 2016/12/15.
 */

import VueRouter = require('vue-router');
import Vue = require('vue');

import {Enen} from "./components/Hello";
import {Spider} from "./components/spider/index";

// console.log(spider);
Vue.use(VueRouter);
const routes = [
    {
      path: '/enen',
      component: Enen,
      name:'enen',
    },
    {
      path: '/selling-spider',
      component: Spider,
      name: 'Selling Spider',
      meta: {
        type: 'selling',
      }
    },
    {
      path: '/sold-spider',
      component: Spider,
      name: 'Sold Spider',
      meta: {
        type: 'selling',
      }
    },
    {
      path: '/complex-spider',
      component: Spider,
      name: 'Complex Spider',
      meta: {
        type: 'selling',
      }
    },
  ]
  ;

export const router = new VueRouter({
  routes,
  // mode: 'history',
});
