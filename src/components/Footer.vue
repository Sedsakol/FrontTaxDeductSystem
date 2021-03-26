<template>
  <div id="footer">
    <b-row>
      <b-col cols="5">
        <b-img src="../assets/images/logo_black.svg" height="30" alt="Image" class="mb-3"></b-img>
        <br>เครื่องมือในการคำนวณภาษี และแนะนำการลงทุนเพื่อลดหย่อนภาษี
        <br>จากโครงงานของนักศึกษาชั้นปีที่ 4 สาขาวิศวกรรมคอมพิวเตอร์ 
        <br>คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      </b-col>
      <b-col>
        <b>ข้อมูลเพิ่มเติม</b><p/>
        <router-link to="/policy">นโยบายความเป็นส่วนตัว</router-link><p/>
        <router-link to="/term">นโนบายและเงื่อนไขการใช้งาน</router-link><p/>
        <router-link to="/how_to_delete">ขั้นตอนการลบบัญชี</router-link><p/>
      </b-col>
      <b-col>
        <b>ช่องทางการติดต่อ</b><p/>
        <p>email : <a :href="'mailto:' + email_url">{{ email_url }}</a></p>
        <p>our website : <a :href="our_website_url">{{ our_website_url }}</a></p>
      </b-col>
    </b-row>
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