<template>
  <div id="app">
    <div id="background">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/regis">Regis</router-link> |
      <router-link to="/taxCalculate">คำนวณภาษี</router-link>
    </div>
    <router-view />
    </div>
  </div>
</template>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */
@font-face {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Prompt', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat&family=Prompt&display=swap');
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Montserrat', sans-serif;
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#background{
  background: #E5E5E5;
  width : 100%;
  height : 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
