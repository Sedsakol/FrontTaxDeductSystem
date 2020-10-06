<template>
  <div id="bar">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" class="mb-0" style="padding-right:75px">TaxDeduct</b-navbar-brand>
      <b-nav>
        <b-nav-item href="#1" id="test"><router-link to="/">หน้าแรก</router-link></b-nav-item>
        <b-nav-item href="#1"><router-link to="/taxCalculate">คำนวณภาษี</router-link></b-nav-item>
        <b-nav-item href="#1"><router-link to="/suggestion">แนะนำการลงทุน</router-link></b-nav-item>
        <b-nav-item href="#1"><router-link to="">เกี่ยวกับเรา</router-link></b-nav-item>
      </b-nav>
      <b-nav class="ml-auto">
        <b-nav-item href="#1"><router-link to="/login">เข้าสู่ระบบ</router-link></b-nav-item>
        <b-nav-item href="#1"><router-link to="/regis"><b-button variant="info">สร้างบัญชี</b-button></router-link></b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Bar",
};
</script>

<style scoped>
#bar {
  background: #ffffff;
  width: 100%;
  position: relative;
  height: 64px;
  padding: 0px;
}



#bar a {
  color: #2c3e50;
}

#bar a.router-link-exact-active {
  color: #57A3B3;
}
</style>
