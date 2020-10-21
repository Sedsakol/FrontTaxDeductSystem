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
  color: #2c3e50;
}
#background {
  background: #F4F9FA;
  width: 100%;
  height: 100%;
}
#card{
    padding: 120px 0px 120px 0px;
}

.btn-primary:hover{
  background-color: #175E7A !important;
  border-color: #175E7A !important;
}

.btn-primary,
.btn-primary:focus {
  background-color: #57A3B3 !important;
  width: 100%;
  /* width: 300px; */
  border-color: #57A3B3 !important;
  box-shadow: none;
}

.btn-outline-primary:hover{
  background-color: #ffffff !important;
  border-color: #175E7A !important;
  color: #175E7A ;
}

.btn-outline-primary,
.btn-outline-primary:focus{
  border-color: #57A3B3 !important;
  color: #57A3B3;
  width: 100%;
  /* width: 300px; */
  box-shadow: none;
}

.form-control{
  width: 100%;
  /* width: 300px; */
}
.form-control:focus {
  border-color: #57A3B3;
  /* box-shadow: 0 0 0 0.2rem #87D7DE; */
  box-shadow: none;
}
.checkbox .active{
  background-color: #ffffff !important;
  border-color: #57A3B3 !important;
  box-shadow: none !important;
}

</style>
