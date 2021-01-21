<template>
  <div id="collect">
    <b-card no-body>
      <b-row class="w-100" align-v="stretch">
        <b-col col xl="6" class="bg-mainblue center">
          <b-img src="../assets/images/collect_login.svg" alt="Image" class="rounded-0"></b-img>
        </b-col>
        <b-col col xl="6" class="center">
          <b-card-body class="text-center">
            <b-card-text>
              <h4><b><span class="text-subblue">ขอบคุณ</span> สำหรับการกรอกข้อมูล</b></h4>
              กดปุ่มด้านล่างเพื่อออกจากระบบ <p/>
              <button v-on:click="sign_out" class="btn btn-primary" id="regularbutton">
                ออกจากระบบ 
              </button>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>


  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';  
import store from "../store/index.js";
export default {
  name: "LoginCard",
  data() {
    return {

    };
  },
  methods: {
    sign_out(){
      console.log('sign_out')
      this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
      this.is_login = false
      this.$router.push("/collectdata/login");
      this.$router.go();
    }
  }
};
</script>
