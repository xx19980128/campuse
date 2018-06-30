<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*
**VW<768px,
**768<=VW<992
**992<=VW<1200
**1200<VW
*/
html,body{
  margin:0;
  background-image: url('./assets/img/bg.png');
  background-repeat: repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#fff;
/*  padding-top:20px;
  padding-left:10px;
  padding-right:10px;*/
}

ul.el-menu{
  z-index:99;
}

.el-submenu__title i{
    color:#fff;
}

</style>
