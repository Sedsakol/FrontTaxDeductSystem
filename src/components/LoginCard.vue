<template>
  <div id="card">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">เข้าสู่ระบบ</h4>

          <!-- <b-overlay
            :show="busy"
            rounded
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block"
            @hidden="onHidden"
          > -->
          <button id="facebook" v-on:click="facebook_login" block class="btn btn-primary">
              Login with Facebook
          </button>
          <!-- </b-overlay> -->

          <div class="hr" id="or">
              <span class="hr-title">หรือ</span>
          </div>

          <div id="form-login">
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

          </div>

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
      // busy: false,
      // timeout: null,
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
          currentObj.profile_t = JSON.stringify(response.data);
          console.log(currentObj.profile_t)
          await currentObj.$cookies.set('profile',currentObj.profile_t);
          await store.commit('profile_change',currentObj.profile_t);
          currentObj.$router.push("/");
          currentObj.$router.go();
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
      console.log({
          email: email,
          password: password
        })
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
        .catch(function(e) {
          currentObj.output = "error";
          console.log("Username or Password is invalid.");
          console.log(e);
          //แสดงข้อความ Username or Password is invalid.
        });
    },
    async facebook_login() {
      console.log('facebook login')
      // this.busy = true
      var currentObj = this;
      var provide = new firebase.auth.FacebookAuthProvider();
      provide.addScope('user_birthday');
      provide.addScope('user_gender');
      provide.addScope('user_likes');
      provide.addScope('user_posts');
      await firebase
        .auth()
        .signInWithPopup(provide)
        .then(result  => {

          var bd = null
          if (result.additionalUserInfo.profile.birthday){
            bd = result.additionalUserInfo.profile.birthday
            var birthdate_split = bd.split("/")
            bd = birthdate_split[1] + "/" + birthdate_split[0] + "/" + birthdate_split[2]
          }
          
          console.log(result.additionalUserInfo)
          //รออัพเดท gender
          var obj = {
            email: result.additionalUserInfo.profile.email,
            gender: (result.additionalUserInfo.profile.gender === 'male') ? 2 : 1,
            birthdate: bd,
            facebook_id: result.additionalUserInfo.profile.id,
            uid: result.user.uid,
            token: result.credential.accessToken,
            fullname: result.additionalUserInfo.profile.name
          };

          console.log(obj)

          currentObj.axios
          .post("facebook_login/",JSON.stringify(obj))
          .then(function(response) {
            currentObj.facebook_login_res = response.data;
            if (currentObj.facebook_login_res.status == 200){
               currentObj.user_login(obj.email,obj.uid)
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
