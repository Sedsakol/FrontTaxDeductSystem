<template>
  <div id="card">
    <div class="content-box">
      <h4 class="text-center card-title">เข้าสู่ระบบ</h4>

      <form @submit.stop.prevent="user_login(user.email,user.password)">

        <button id="facebook" v-on:click="facebook_login" block class="btn btn-primary">
          <b-icon shift-v="1" icon="facebook"/> Log in with Facebook 
        </button>

        <div class="hr">
          <span class="hr-title">หรือ</span>
        </div>

        <div id="form-login">
          <b-form-group>
            <b-form-input
              v-model.trim="$v.user.email.$model"
              type="email"
              placeholder="อีเมล"
              lazy-formatter
              :formatter="formatter"
              :state="completeStatus.value"
            />
          </b-form-group>

          <b-form-group>
            <b-form-input
              v-model="$v.user.password.$model"
              type="password"
              placeholder="รหัสผ่าน"
              :state="completeStatus.value"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">{{ completeStatus.descrip }}</b-form-invalid-feedback>
          </b-form-group>

          <button class="btn btn-primary" id="fullbutton" type="submit">
            เข้าสู่ระบบ
          </button>
        </div>

        <div class="text-center mt-2">
          <p>ยังไม่มีบัญชีผู้ใช้งาน?
          <router-link to="/register" class="text-subblue">สร้างบัญชีตอนนี้</router-link></p>
        </div>
      </form>

      <b-modal ref="modal-wait" ok-title="ตกลง" :hide-header=true ok-only centered> 
        <p class="my-4 text-center">กรุณารอสักครู่ เรากำลังเข้าสู่ระบบให้คุณ</p>
        <div class="d-flex justify-content-center mb-3">
          <b-spinner variant="dark"/>
        </div>
      </b-modal>
      
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import 'firebase/auth';  
import store from "../store/index.js";

export default {
  name: "LoginCard",
  mixins: [validationMixin],
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      profile: store.state.profile,
      completeStatus: {
        value: null,
        descrip: ""
      }
    };
  },
  validations: {
    user: {
      email: { required , email},
      password: { required }
    }
  },
  methods: {
    facebook_login() {
      let currentObj = this;
      console.log('facebook_login');
      FB.login(async function(response){
        //console.log(response);
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          console.log('login complete')
          currentObj.$refs['modal-wait'].show()
          console.log('show loading')

          await FB.api('/'+response.authResponse.userID, 
            {
              fields: 'id,likes{category,category_list}',
              locale: 'en_US'
            }, function(result) {
            //console.log(result)
            currentObj.axios
            .post("categories/",result).then(async function(r) {
              console.log(r)
            }).catch(function(error) {
              console.log(error);
            });
          });


          await FB.api('/'+response.authResponse.userID, 
          {
              fields: 'id,name,birthday,gender,email',
              locale: 'en_US'
            }, function(result) {

            console.log('Successful login for: ' + result.name);
            //console.log(result)
            var bd = null
            if (result.birthday){
              bd = result.birthday
              var birthdate_split = bd.split("/")
              bd = birthdate_split[1] + "/" + birthdate_split[0] + "/" + birthdate_split[2]
            }

            var obj = {
              email: result.email,
              gender: (result.gender === 'male') ? 2 : 1,
              birthdate: bd,
              facebook_id: result.id,
              token: response.authResponse.accessToken,
              fullname: result.name
            
            };

            //console.log(obj)
            //แสดง modal
            
            currentObj.axios
            .post("facebook_login/",JSON.stringify(obj))
            .then(async function(response) {
              currentObj.facebook_login_res = response.data;
              //console.log(currentObj.facebook_login_res.status)
              if (currentObj.facebook_login_res.status == 200){
                await currentObj.user_login(obj.email,obj.facebook_id)

              }
              else {
                //console.log(currentObj.facebook_login_res)
                currentObj.$refs['modal-wait'].hide()
              }
            })
            .catch(function(error) {
              console.log(error);
              currentObj.$refs['modal-wait'].hide()
            });

          });
        } else {
          // The person is not logged into your webpage or we are unable to tell. 
          console.log('login not complete')
        }
      }, {scope: 'email,user_gender,user_birthday,user_likes'});

    },
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
          //console.log(currentObj.profile_t)
          await currentObj.$cookies.set('profile',currentObj.profile_t);
          store.commit('profile_change',currentObj.profile_t);
          currentObj.$router.push("/");
          currentObj.$router.go();
        })
        .catch(function(error) {
          currentObj.profile = null;
          console.log(error);
          currentObj.$refs['modal-wait'].hide()
        });
      }
      else{
        console.log("Pls Login");
      }
    },
    async user_login(email = this.user.email,password= this.user.email) {
      // console.log("submit login!");
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        // console.log("validation error");
        this.completeStatus.value = false
        this.completeStatus.descrip = "กรุณากรอกข้อมูลให้ครบถ้วน"
      }
      else {
        this.completeStatus.value = null
        this.completeStatus.descrip = ""
        let currentObj = this;
        //แสดง modal
        currentObj.$refs['modal-wait'].show()
        await this.axios
          .post("auth/obtain_token/", {
            email: email,
            password: password
          })
          .then(async function(response) {
            currentObj.output = response.data.token;
            await currentObj.$cookies.set("token", currentObj.output);
            store.commit('is_login_change', true);
            console.log("Login Success");
            await currentObj.get_profile();
          })
          .catch(function(e) {
            currentObj.output = "error";
            console.log("Username or Password is invalid.");
            currentObj.completeStatus.value = false
            currentObj.completeStatus.descrip = "อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง"
            currentObj.$refs['modal-wait'].hide()
          });
        }
    },
  }
};
</script>

<style>

#noAccount {
  margin-top: 20px;
}

</style>
