/**
 * Created by xiezongjun on 2016-12-09.
 */

export default {
  name: 'spider',
  props: [
    'type'
  ],
  beforeCreate: function () {
    let type = this.$route.params.type;
    this.$store.dispatch("refreshComplex");
  },
  watch: {}
  ,
  computed: {
    totalPage: function () {
      return Math.ceil(this.allData.length / this.limit);
    }
    ,
    data: function () {
      return this.allData.slice(this.limit * this.page, this.limit * (this.page + 1));
    }
    ,
    title: function () {
      return this.$route.name
    }
  }
  ,
  filters: {
    cal: function (value) {
      let color = 'blue'
      if (value === 100) {
        color = 'green';
      } else if (value > 60) {
      } else if (value == 0) {
        color = 'red'
      }

      return `badge bg-${color}`
    }
  }
  ,
  data()
  {
    return {
      page: 0,
      limit: 10,
      column: 10,
      counter: 0,
      current: 'waiting.',
      allData: this.$store.state.complex.data,
      items: []
    }
  }
  ,
  methods: {
    nextPage: function (value) {
      if (!value) {
        value = 1;
      }

      let next = this.page + value;
      if (next < this.totalPage && next >= 0) {
        console.log('change page to ' + next);
        this.page = next;
      }
    }
    ,
    gotoPage: function (value) {
      this.page = value;
    }
    ,
    add: function () {
      this.$store.state.complex.data.push({
        id: 200,
        status: 'done',
        percent: 100,
        item: {
          url: "http://github.com",
          price: 100,
          size: 100,
        },
      })
    }
  }
}
