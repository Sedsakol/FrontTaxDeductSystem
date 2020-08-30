<template>
  <div id="app">
    <div id="mainbar">
      <menubar/>
      <loginbar></loginbar>
    </div>
    <div id="content">

    </div>
  </div>
</template>

<script>
import menubar from './components/menubar.vue'
import loginbar from './components/loginbar.vue'

export default {
  name: 'App',
  components: {
    menubar,
    loginbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F4F9FA;
}
#mainbar {
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#content {
  text-align: center;
}
</style>
