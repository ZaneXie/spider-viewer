/**
 * Created by xiezongjun on 2016-12-09.
 */

import Hello from './components/Hello'
import List from './components/list/index';

console.log(Hello);
console.log('xxx',List);

export default {
  name      : 'app',
  components: {
    Hello,
    List
  },
  created   : function() {
    console.log(this.$store.state.count);
    let socket = this.$socket;
    socket.on('test', (...args)=>{
      console.log(args);
    })
    // this.$socket.on('Parsing', (data) => {
    //   console.log(data);
    // })
    // this.$socket.on('TargetUrlChange', (data) => {
    //   console.log(data);
    // })
  }
}
