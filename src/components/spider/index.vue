<template>
  <!--
  <div class="hello">
    <h1>{{ type }}</h1>
    <div><span>current: {{ current }}</span></div>
    <div>
      <span>todo:</span>
      <ul v-for="item in items">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
  -->
  <div class="box">

    <div class="box-header with-border">
      <h3 class="box-title">{{title}} List</h3>
      <button v-on:click="nextPage(1)">Add 1</button>
      <p>The button above has been clicked {{ page }} times.</p>
      <button v-on:click="add">Add xxx</button>
    </div>
    <div class="box-body">
      <table class="table table-bordered table-hover">
        <tr>
          <th>#</th>
          <th>链接</th>
          <th> </th>
          <th> </th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in data">
          <td>{{item.id + 1}}</td>
          <td>{{item.item.url}}</td>
          <td>{{item.item.url}}</td>
          <td>{{item.item.url}}</td>
          <td><span :class="item.percent | cal">{{item.percent}}</span></td>
          <td class="operation">
            <div class="btn-group">
              <button type="button" class="btn btn-success">Action</button>
              <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
                      aria-expanded="false">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Parse</a></li>
                <li><a href="#">Selling</a></li>
                <li><a href="#">Sold</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </table>
      <p>progress</p>
      <div class="progress sm">
        <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40"
             aria-valuemin="0" aria-valuemax="100" style="width: 40%">
          <span class="sr-only">40% Complete (success)</span>
        </div>
      </div>
    </div>
    <div class="box-footer clearfix">
      <ul class="pagination pagination-sm no-margin pull-right">
        <li><a v-on:click.prevent="nextPage(-1)">«</a></li>
        <template v-for="i in totalPage">
          <li><a v-on:click.prevent="gotoPage(i-1)">{{i}}</a></li>
        </template>
        <li><a v-on:click.prevent="nextPage(1)">»</a></li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.ts">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .operation .btn-group{
    padding:2px;
  }
</style>
