<template>
  <div id="card">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">เข้าสู่ระบบ</h4>

          <button id="facebook" v-on:click="facebook_login" block class="btn btn-primary">
              เข้าสู่ระบบด้วย Facebook
          </button>

          <div class="hr" id="or">
              <span class="hr-title">หรือ</span>
          </div>

          <form @submit.prevent="user_login" id="form-login">
            <b-form-group>
              <b-form-input
                v-model="user.email"
                type="email"
                placeholder="อีเมล"
                lazy-formatter
                :formatter="formatter"
                required
              />
            </b-form-group>

            <b-form-group>
              <b-form-input
                v-model="user.password"
                type="password"
                placeholder="รหัสผ่าน"
                required
              />
            </b-form-group>

            <button type="submit" class="btn btn-primary" block>
              เข้าสู่ระบบ
            </button>

            <div class="text-center mt-2">
              <p>ยังไม่มีบัญชีผู้ใช้งาน?
              <router-link to="/regis" class="text-subblue">สร้างบัญชีตอนนี้</router-link></p>
            </div>

          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LoginCard",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    // to format email -> lowercase
    formatter(value) {
      return value.toLowerCase();
    },

    async user_login() {
      let currentObj = this;
      await this.axios
        .post("http://161.246.5.140:8000/auth/obtain_token/", {
          email: this.user.email,
          password: this.user.password
        })
        .then(function(response) {
          currentObj.output = response.data.token;
          currentObj.$cookies.set("token", currentObj.output);
          console.log("Login Success");
          currentObj.$router.push("/");
        })
        .catch(function() {
          currentObj.output = "error";
          console.log("Username or Password is invalid.");
          //แสดงข้อความ Username or Password is invalid.
        });
    },
    async facebook_login() {
      console.log('facebook login')
      var provide = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provide)
        .then(result => {
          // create user in db
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          
          let obj = {
            facebook_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            birthday: result.additionalUserInfo.profile.birthday,
            profile_image: result.user.photoURL + "?height=500",
            user_type_id: 1
          };
          console.log(result);
        })
        .catch(err => {
          console.log('fail')
          console.log(err)
        });


    }
  }
};
</script>

<style>

#noAccount {
  margin-top: 20px;
}

</style>
