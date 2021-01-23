<template>
    <div id="app">
      <div id="background">
        <!-- <Bar/> -->
        <Content/>
        <!-- <Footer/> -->
        <Footer2/>
      </div>
    </div>
</template>

<script>
import Bar from "@/components/Bar.vue"
import Content from "@/components/Content.vue"
import Footer from "@/components/Footer.vue"
import Footer2 from "@/components/Footer2.vue"
export default {
  name: "app",
  components : {
        Bar,
        Content,
        Footer,
        Footer2,
  },
  created(){
    console.log('created main');
    window.fbAsyncInit = () => {
      FB.init({
        appId: '690931201805662',
        cookie: true,
        xfbml: true,
        version: 'v9.0'
      });

      console.log('facebook init')
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

}
</script>

<style>

</style>
