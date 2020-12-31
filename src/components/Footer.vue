<template>
  <div id="footer">
    <b-container>
    <b-row>
        <b-col>
            <b>ข้อมูลเพิ่มเติม</b><p/>
            <router-link to="/policy">นโยบายความเป็นส่วนตัว</router-link><p/>
            <router-link to="/term">นโนบายและเงื่อนไขการใช้งาน</router-link><p/>
            <router-link to="/how_to_delete">ขั้นตอนการลบบัญชี</router-link><p/>
        </b-col>
        <b-col>
            <b>ช่องทางการติดต่อ</b><p/>
            email : {{ email_url }}<p/>
            our website : {{ our_website_url }}<p/>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email_url : 'taxdeduct.kmitl@gmail.com',
      our_website_url : 'https://taxdeduct-2bd59.web.app/'
    }
  }
};
</script>