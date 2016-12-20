/**
 * Created by xiezongjun on 2016-12-15.
 */
import * as Vue from "vue";
import {VueComponent} from "../../utils/decorators";

@VueComponent(require('./index.vue'), {
  props: {
    propMessage: String
  },
})
export class Dash extends Vue {

  title = 'title';
  current = 'waiting.';
  items = []

  // lifecycle hook
  mounted() {
    this.greet()
  }

  created() {
  }

  // computed
  // get computedMsg() {
  // return 'computed ' + this.msg
  // }

  // method
  greet() {
    // alert('greeting: ' + this.msg)
  }
}

