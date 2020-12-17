<template>
    <div id="app">
      <div id="background">
        <Bar/>
        <h1>Hello Firebase</h1>
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

</style>
