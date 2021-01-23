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
              <h4><b><span class="text-subblue">ขอบคุณ</span> สำหรับความร่วมมือในการกรอกข้อมูล</b></h4>
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
