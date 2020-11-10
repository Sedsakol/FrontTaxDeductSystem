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
  },
  methods: {
    async get_profile(){
      let currentObj = this
      if (this.$cookies.get('token')){
        console.log("Not Null");
        await this.axios
        .get("http://161.246.5.140:8000/profile/", {
          headers: {
            'Authorization': this.$cookies.get('token')
          }
        })
        .then(async function(response) {
          console.log("OK");
          currentObj.user = JSON.stringify(response.data);
          console.log(currentObj.user);
          await currentObj.$cookies.set('user',currentObj.user);
        })
        .catch(function(error) {
          currentObj.user = null;
          console.log(error);
          //แสดงข้อความ Username or Password is invalid.
        });
      }
      else{
        console.log("Null");
      }
      await console.log(this.$cookies.get('user'))
    }
  },
  mounted() {
    this.get_profile()
  },
}
</script>

<style>

</style>
