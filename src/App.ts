/**
 * Created by xiezongjun on 2016-12-09.
 */

import Hello from './components/Hello'
import List from './components/list/index';

console.log(Hello);


export default {
  name      : 'app',
  components: {
    Hello,
    List
  },
  created   : function() {
    // let socket = this.$socket;
    // this.$socket.on('Parsing', (data) => {
    //   console.log(data);
    // })
    // this.$socket.on('TargetUrlChange', (data) => {
    //   console.log(data);
    // })
  }
}
