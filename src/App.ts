/**
 * Created by xiezongjun on 2016-12-09.
 */

import Dash from './components/dash';

export default {
  name      : 'app',
  components: {
    Dash,
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
