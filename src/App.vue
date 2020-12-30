<template>
    <div id="app">
      <div id="background">
        <Bar/>
        <Content/>
        <Footer/>
      </div>
    </div>
</template>

<script>
import Bar from "@/components/Bar.vue"
import Content from "@/components/Content.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: "app",
  components : {
        Bar,
        Content,
        Footer,
  }
}
</script>

<style>

</style>
