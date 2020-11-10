<template>
  <div class = "align-content-center" id="bar">
    <b-navbar variant="faded" class="mx-auto">
      <b-navbar-brand >TaxDeduct</b-navbar-brand>
      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">หน้าแรก</router-link></b-nav-item>
          <b-nav-item><router-link to="/taxCalculate">คำนวณภาษี</router-link></b-nav-item>
          <b-nav-item><router-link to="/suggestion">แนะนำการลงทุน</router-link></b-nav-item>
          <b-nav-item><router-link to="/about">เกี่ยวกับเรา</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">

          <b-nav-item v-if = "user"><span>{{user.firstname}} {{user.lastname}}</span></b-nav-item>

          <!-- <div v-if!="user"> -->
            <b-nav-item><router-link to="/login"><button class="btn btn-outline-primary">เข้าสู่ระบบ</button></router-link></b-nav-item>
            <b-nav-item><router-link to="/regis"><button class="btn btn-primary">สร้างบัญชี</button></router-link></b-nav-item>
          <!-- </div> -->
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "Bar",
    data() {
    return {
      username: "admin",
    }
  },


};
</script>

<style>

</style>
