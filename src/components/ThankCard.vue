<template>
  <div id="collect">
    <b-card no-body id="login2">
      <b-row class="w-100 h-100" align-v="stretch">
        <b-col xl class="bg-mainblue center">
          <b-img src="../assets/images/collect_login.svg" alt="Image" class="rounded-0 card-img"></b-img>
        </b-col>
        <b-col xl class="center bg-white">
          <b-card-body class="text-center">
            <b-card-text>
              <b-icon icon="check-circle-fill" font-scale="4" class="text-success"/><p/>
              <h4><b>กรอกข้อมูลเสร็จสิ้น !</b></h4>
              <p/>
              <h6><b>ขอบคุณสำหรับการกรอกข้อมูล</b><br></h6>
              <p/>
              <button v-on:click="again" class="btn btn-primary" id="regularbutton">
                เก็บข้อมูลอีกครั้ง
              </button>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <!-- collect data footer -->
    <b-container class="text-center caption">
      เก็บข้อมูลเพื่อใช้ในการทำโครงงาน ของนักศึกษาคณะวิศวกรรมศาสตร์<br>
      ภาควิชาวิศวกรรมคอมพิวเตอร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      <p/><router-link to="/" class="text-subblue">กลับหน้าหลัก</router-link>
    </b-container>
  </div>
</template>

<script>
import 'firebase/auth';  
export default {
  name: "LoginCard",
  components : {
  },
  data() {
    return {
    };
  },
  methods: {
    again(){
      console.log('Thank you again')
      let currentObj = this
      currentObj.$cookies.keys().forEach(cookie => currentObj.$cookies.remove(cookie))
      this.$router.push("/collectdata/login");
      this.$router.go();
    }
  }
};
</script>
