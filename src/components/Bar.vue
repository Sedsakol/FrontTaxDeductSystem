<template>
  <div class="align-content-center" id="bar" :key="is_login">
    <b-navbar variant="faded" class="mx-auto" toggleable="xl">
      <b-navbar-brand>
        <router-link to="/"><b-img src="../assets/images/logo.svg"></b-img></router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id = "nav-collapse">
        <b-navbar-nav>
          <b-nav-item><router-link to="/">หน้าแรก</router-link></b-nav-item>
          <b-nav-item><router-link to="/tax/calculate">คำนวณภาษี</router-link></b-nav-item>
          <b-nav-item><router-link to="/question">แบบทดสอบความเสี่ยง</router-link></b-nav-item>
          <b-nav-item><router-link to="/suggestion">แนะนำการลงทุน</router-link></b-nav-item>
          <b-nav-item><router-link to="/collectdata/login">เก็บข้อมูลกลุ่มทดสอบ
          <b-icon icon="exclamation" animation="cylon-vertical" font-scale="1" shift-h="-8" />
          </router-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" >

          <div v-if="is_login">
            <b-dropdown class="m-md-2" right>
              <template #button-content>{{user.email}} <b-icon icon="chevron-down" font-scale="0.9" shift-v="4" /></template>
              <b-dropdown-item to="/profile">บัญชีของฉัน</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item v-on:click="sign_out">ออกจากระบบ</b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex flex-row align-content-center" v-if="!is_login">
            <b-nav-item ><router-link to="/login"><button class="btn btn-outline-primary" id="barbutton">เข้าสู่ระบบ</button></router-link></b-nav-item>
            <b-nav-item ><router-link to="/register"><button class="btn btn-primary" id="barbutton">สร้างบัญชี</button></router-link></b-nav-item>
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
      user : store.state.profile,
      is_login: store.state.is_login,
    }
  },
  mounted() {
    this.is_login_check()
  },
  methods: {
    async is_login_check() {
      if(this.$cookies.get('token') && this.$cookies.get('profile') ){
        this.is_login = true
        let profile = this.$cookies.get('profile')
        await store.commit('profile_change',profile)
        this.user = store.state.profile
      }
      else{
        this.is_login = false
      }
    },
    sign_out(){
      console.log('sign_out')
      this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
      this.is_login = false
      this.$router.push("/");
      this.$router.go();
    }
  }
  


};
</script>

<style>

</style>
