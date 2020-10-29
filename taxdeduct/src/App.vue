<template>
    <div id="app">
      <div id="background">
        <Bar/>
        <Content/>
      </div>
    </div>
</template>

<script>
import Bar from "@/components/Bar.vue"
import Content from "@/components/Content.vue"
export default {
  name: "app",
  components : {
        Bar,
        Content,
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
/* remove up-down arrow in number type input  */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] { 
  text-align:right ;
}

/* override text color*/
.text-danger,
.text-danger::-webkit-input-placeholder {
  color: #F43240 !important;
}

.text-success{
  color: #689F39 !important;
}

.text-primary{
  color: #49474A !important;
}

.text-mainblue{
  color: #175E7A !important;
}

.text-subblue{
  color: #57A3B3 !important;
}



</style>
