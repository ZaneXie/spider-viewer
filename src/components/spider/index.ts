/**
 * Created by xiezongjun on 2016-12-09.
 */

export default {
  name        : 'spider',
  props       : [
    'type'
  ],
  beforeCreate: function () {
    let type = this.$route.params.type;
    console.log(type);
  },
  computed:{
    title:function(){
      let type = this.$route.params.type;
      return  type[0].toUpperCase() + type.slice(1);
    }
  },
  filters     : {
    cal: function (value) {
      value = 11 - value
      let color = 'blue'
      if (value === 10) {
        color = 'green';
      } else if (value > 6) {
      } else if (value == 1) {
        color = 'red'
      }

      return `badge bg-${color}`
    }
  },
  data () {
    return {
      column : 10,
      title  : 'title',
      current: 'waiting.',
      items  : []
    }
  }
}
