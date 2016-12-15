/**
 * Created by xiezongjun on 2016-12-15.
 */

export default {
  name        : 'nav',
  props       : [
    'type'
  ],
  beforeCreate: function () {
  },
  data () {
    return {
      title: 'title',
      current:'waiting.',
      items: []
    }
  }
}
