/**
 * Created by xiezongjun on 2016-12-09.
 */

import Component from "vue-class-component/lib/index";
import * as Vue from "vue";
import {Dash} from "./components/dash/index";
import {VueComponent} from "./utils/decorators";

@VueComponent(require('./app.vue'), {
  props: {
    propMessage: String
  },
  components: {
    Dash
  }
})
export class App extends Vue {
  propMessage: string

  // inital data
  msg: number = 123

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted() {
    this.greet()
  }

  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }

  // method
  greet() {
    // alert('greeting: ' + this.msg)
  }
}
