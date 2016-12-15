/**
 * Created by xiezongjun on 2016-12-15.
 */
import List from '../list';
export default {
  name        : 'dash',
  beforeCreate: function () {
  },
  components:{
    List
  },
  data () {
    return {
      title: 'title',
      current:'waiting.',
      items: []
    }
  }
}
