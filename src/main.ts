// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue = require('vue');

import App =require('./App');
import IO = require('socket.io-client');
import vendor = require('./vendor');
import {store} from './store';
import {router} from "./router";
vendor.load();

declare module vuejs {
  export interface Vue {
    $socket: SocketIOClient.Socket
  }
}

(<any>Vue).prototype.$socket = IO.connect('http://localhost:3000');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  template: '<app/>',
  router: router,
  components: {App},
  created: () => {

  }
})
