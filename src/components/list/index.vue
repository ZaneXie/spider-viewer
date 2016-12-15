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
      <h3 class="box-title">Compilex List</h3>
    </div>
    <div class="box-body">
      <table class="table table-bordered table-hover">
        <tr>
          <th>#</th>
          <th>链接</th>
          <th>面积</th>
          <th>单价</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="n in 10">
          <td>1.</td>
          <td>http://www.baidu.com</td>
          <td>100</td>
          <td>50</td>
          <td><span :class=" n | cal">{{ 100 - n * 10}}%</span></td>
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
