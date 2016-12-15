/**
 * Created by xiezongjun on 2016-12-09.
 */

export default {
  name: 'hello',
  computed:{
    msg(){
      return this.$store.state.count;
    }
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
