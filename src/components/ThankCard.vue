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
              <h6><b>ออกจากระบบเรียบร้อยแล้ว<br>ขอบคุณสำหรับการกรอกข้อมูล</b></h6>
              <p/>
              <button v-on:click="again" class="btn btn-primary" id="regularbutton">
                เก็บข้อมูลอีกครั้ง
              </button>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>


  </div>
</template>

<script>
import store from "../store/index.js";
import firebase from 'firebase/app';
import 'firebase/auth';  
export default {
  name: "LoginCard",
  data() {
    return {

    };
  },
  methods: {
    sign_out(){
      console.log('Thank you again')
      this.$router.push("/collectdata/login");
      this.$router.go();
    }
  }
};
</script>
