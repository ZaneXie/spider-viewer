/**
 * Created by xiezongjun on 2016-12-09.
 */

export default {
  name        : 'list',
  props       : [
    'type'
  ],
  beforeCreate: function () {
    let socket = this.$socket;
    let that = this;
    this.$socket.on('Parsing', (type) => {
      if (type[0] === that.type) {
        console.log(type);
        this.current = type[1];
      }
    })
    this.$socket.on('TargetUrlChange', (type ) => {
      if (type[0] === that.type) {
        console.log(type );
        that.items = type[1];
      }
    })
  },
  data () {
    return {
      title: 'title',
      current:'waiting.',
      items: []
    }
  }
}
