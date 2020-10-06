<template>
    <div id="app">
      <div id="background">
        <Bar/>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Bar from "@/components/Bar.vue"
export default {
  name: "app",
  components : {
        Bar,
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Prompt&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#background {
  background: #F4F9FA;
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #57A3B3;
}
</style>
