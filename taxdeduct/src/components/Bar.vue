<template>
  <div id="box">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" class="mb-0" style="padding-right:75px"
        >TaxDeduct</b-navbar-brand
      >
      <b-nav>
        <b-nav-item href="#1" id="test">หน้าแรก</b-nav-item>
        <b-nav-item href="#1">คำนวณภาษี</b-nav-item>
        <b-nav-item href="#1">แนะนำการลงทุน</b-nav-item>
        <b-nav-item href="#1">เกี่ยวกับเรา</b-nav-item>
      </b-nav>
      <b-nav class="ml-auto">
        <b-nav-item href="#1">เข้าสู่ระบบ</b-nav-item>
        <b-nav-item href="#1">
          <b-button variant="info">สร้างบัญชี</b-button>
        </b-nav-item>
        <b-nav-item href="#1"></b-nav-item>
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
#box {
  background: #ffffff;
  width: 100%;
}
</style>
