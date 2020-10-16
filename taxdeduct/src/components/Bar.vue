<template>
  <div id="bar">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand >TaxDeduct</b-navbar-brand>
      <b-collapse is-nav>
        <b-navbar-nav id="item">
          <b-nav-item><router-link to="/">หน้าแรก</router-link></b-nav-item>
          <b-nav-item><router-link to="/taxCalculate">คำนวณภาษี</router-link></b-nav-item>
          <b-nav-item><router-link to="/suggestion">แนะนำการลงทุน</router-link></b-nav-item>
          <b-nav-item><router-link to="/about">เกี่ยวกับเรา</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav id="item" class="ml-auto">
          <b-nav-item><router-link to="/login">เข้าสู่ระบบ</router-link></b-nav-item>
          <b-nav-item><router-link to="/regis"><button class="btn btn-primary">สร้างบัญชี</button></router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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
  /* top right bottom left */
  padding: 0px 40px 0px 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
}

#bar a {
  color: #2c3e50;
  padding-left: 16px;
}

#bar a:hover,
/* #bar a.router-link-active, */
#bar a.router-link-exact-active {
  color: #57A3B3;
  cursor: pointer;
  text-decoration: none;
}


</style>
