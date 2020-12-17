<template>
  <div class="align-content-center" id="bar" :key="is_login">
    <b-navbar variant="faded" class="mx-auto">
      <b-navbar-brand>
        <router-link to="/"><b-img src="../assets/images/logo.svg"></b-img></router-link>
      </b-navbar-brand>
      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">หน้าแรก</router-link></b-nav-item>
          <b-nav-item><router-link to="/taxCalculate">คำนวณภาษี</router-link></b-nav-item>
          <b-nav-item><router-link to="/suggestion">แนะนำการลงทุน</router-link></b-nav-item>
          <b-nav-item><router-link to="/question">แบบทดสอบความเสี่ยง</router-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="user">
        <div>
          <b-dropdown class="m-md-2" right>
            <template #button-content>{{email}} </template>
            <b-dropdown-item to="/profile">บัญชีของฉัน</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>ออกจากระบบ</b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="d-flex flex-row" v-if="!user">
        <b-nav-item ><router-link to="/login"><button class="btn btn-outline-primary" id="barbutton">เข้าสู่ระบบ</button></router-link></b-nav-item>
        <b-nav-item ><router-link to="/regis"><button class="btn btn-primary" id="barbutton">สร้างบัญชี</button></router-link></b-nav-item>
        </div>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import axios from 'axios'
import store from "../store/index.js"
export default {
  name: "Bar",
    data() {
    return {
      user : store.state.user,
      email : "lalida.tan@gmail.com",
    }
  },

  methods: {
    async get_profile(){
      let currentObj = this
      if (this.$cookies.get('token')){
        console.log("Not Null");
        await this.axios
        .get("/profile/", {
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
    },
    sign_out(){
      console.log('sign_out')
      this.$cookies.remove('token')
      this.is_login = false
    }
  }
  


};
</script>

<style>

</style>
