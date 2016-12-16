<template>
  <div class="wrapper">
    <header class="main-header">
      <!-- Logo -->
      <!-- Logo -->
      <a class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>spider</b></span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Spider</b></span>
      </a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li><a href="https://github.com/zanexie/spider-viewer" target="_blank">Git Repository</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 548px;">
        <div class="sidebar" id="scrollspy" style="height: 548px; overflow: hidden; width: auto;">

          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="nav sidebar-menu">
            <li class="header">TABLE OF CONTENTS</li>
            <li class=""><router-link :to="{name:'Complex Spider', params:{type:'complex'}}"><i class="fa fa-circle-o"></i> Complex</router-link></li>
            <li class=""><router-link :to="{name:'Sold Spider', params:{type:'Sold'}}"><i class="fa fa-circle-o"></i> Sold</router-link></li>
            <li class=""><router-link :to="{name:'Selling Spider', params:{type:'Selling'}}"><i class="fa fa-circle-o"></i> Selling</router-link></li>
            <li><a href="#license"><i class="fa fa-circle-o"></i> License</a></li>
          </ul>
        </div>
        <div class="slimScrollBar"
             style="background: rgba(0, 0, 0, 0.2) none repeat scroll 0% 0%; width: 3px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 493.11px;"></div>
        <div class="slimScrollRail"
             style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;"></div>
      </div>
      <!-- /.sidebar -->
    </aside>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          {{$route.name}}
          <!--<small>Version 2.0</small>-->
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="active">{{$route.params.type}}</li>
        </ol>
      </section>
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 2.3.7
      </div>
      <strong>Copyright &copy; 2016 </strong> All rights reserved.
    </footer>
  </div>
</template>
<script src="./index.ts"></script>
<style>

</style>
