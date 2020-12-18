<template>
  <div id="card">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">เข้าสู่ระบบ</h4>

          <button id="facebook" v-on:click="facebook_login" block class="btn btn-primary">
              Login with Facebook
          </button>

          <div class="hr" id="or">
              <span class="hr-title">หรือ</span>
          </div>

          <form id="form-login">
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

            <button class="btn btn-primary" block id="fullbutton" v-on:click="user_login(user.email,user.password)">
              เข้าสู่ระบบ
            </button>

          </form>

          <div class="text-center mt-2">
            <p>ยังไม่มีบัญชีผู้ใช้งาน?
            <router-link to="/regis" class="text-subblue">สร้างบัญชีตอนนี้</router-link></p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import store from "../store/index.js";
export default {
  name: "LoginCard",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      profile: store.state.profile
    };
  },

  methods: {
    // to format email -> lowercase
    formatter(value) {
      return value.toLowerCase();
    },
    async get_profile(){
      let currentObj = this
      if (this.$cookies.get('token')){
        await this.axios
        .get("profile/", {
          headers: {
            'Authorization': this.$cookies.get('token')
          }
        })
        .then(async function(response) {
          console.log("get profile");
          currentObj.profile = JSON.stringify(response.data);
          await currentObj.$cookies.set('profile',currentObj.profile);
          await store.commit('profile_change',currentObj.profile);
          currentObj.$router.push("/");
        })
        .catch(function(error) {
          currentObj.profile = null;
          console.log(error);
        });
      }
      else{
        console.log("Pls Login");
      }
    },

    async user_login(email = this.user.email,password= this.user.email) {
      let currentObj = this;
      await this.axios
        .post("auth/obtain_token/", {
          email: email,
          password: password
        })
        .then(async function(response) {
          currentObj.output = response.data.token;
          await currentObj.$cookies.set("token", currentObj.output);
          await store.commit('is_login_change', true);
          await console.log("Login Success");
          await currentObj.get_profile();
        })
        .catch(function() {
          currentObj.output = "error";
          console.log("Username or Password is invalid.");
          //แสดงข้อความ Username or Password is invalid.
        });
    },
    async facebook_login() {
      console.log('facebook login')
      let currentObj = this;
      var provide = new firebase.auth.FacebookAuthProvider();
      await firebase
        .auth()
        .signInWithPopup(provide)
        .then(result  => {

          var bd = null
          if (result.additionalUserInfo.profile.birthday){
            bd = result.additionalUserInfo.profile.birthday
            a = bd.split("/")
            bd = a[1] + "/" + a[0] + "/" + a[2]
          }

          let obj = {
            email: result.additionalUserInfo.profile.email,
            gender: null,
            birthdate: bd,
            facebook_id: result.additionalUserInfo.profile.id,
            uid: result.user.uid,
            token: result.credential.accessToken,
            fullname: result.additionalUserInfo.profile.name
          };

          currentObj.axios
          .post("facebook_login/",obj)
          .then(async function(response) {
            console.log("OK");
            currentObj.facebook_login_res = JSON.stringify(response.data);
            if (currentObj.facebook_login_res.status == 200){
              await currentObj.user_login(obj.email,obj.uid)
            }
            else{
              console.log(currentObj.facebook_login_res)
            }
          })
          .catch(function(error) {
            console.log(error);
          });

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
