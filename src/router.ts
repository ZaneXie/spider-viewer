/**
 * Created by xiezj on 2016/12/15.
 */

import VueRouter = require('vue-router');
import Vue = require('vue');

import spider = require('./components/spider');

Vue.use(VueRouter);
const routes = [
    {
      path     : '/selling-spider',
      component: spider,
      name     : 'Selling Spider',
      meta     : {
        type: 'selling',
      }
    },
    {
      path     : '/sold-spider',
      component: spider,
      name     : 'Sold Spider',
      meta     : {
        type: 'selling',
      }
    },
    {
      path     : '/complex-spider',
      component: spider,
      name     : 'Complex Spider',
      meta     : {
        type: 'selling',
      }
    },
  ]
  ;

export const router = new VueRouter({
  routes,
  // mode: 'history',
});
