/**
 * Created by xiezongjun on 2016-12-09.
 */
import Vue = require('vue');
import Component from "vue-class-component";

// let k = {
//   templates: `
//     <div>
//       <input v-model="msg">
//       <p>prop: {{propMessage}}</p>
//       <p>msg: {{msg}}</p>
//       <p>helloMsg: {{helloMsg}}</p>
//       <p>computed msg: {{computedMsg}}</p>
//       <button @click="greet">Greet</button>
//     </div>
//   `
// }

let v = require('./Hello.vue');
console.log(v);
@Component({
  props: {
    propMessage: String
  },
  // render: v.render
  template: `
    <div>
      <input v-model="msg">
      <p>prop: {{propMessage}}</p>
      <p>msg: {{msg}}</p>
      <p>helloMsg: {{helloMsg}}</p>
      <p>computed msg: {{computedMsg}}</p>
      <button @click="greet">Greet</button>
    </div>
  `
})
export class Enen extends Vue {
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
    alert('greeting: ' + this.msg)
  }
}
