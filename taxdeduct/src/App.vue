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
@import './assets/styles/main.css';

</style>
