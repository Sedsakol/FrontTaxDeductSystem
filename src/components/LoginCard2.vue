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
              <h4><b>Welcome to <span class="text-subblue">Tax Deduct</span></b></h4>
              เข้าสู่ระบบด้วยบัญชี Facebook <p/>
              <button id="facebook" v-on:click="facebook_login" block class="btn btn-primary" >
                <b-icon icon="facebook"/> Login with Facebook 
              </button>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <!-- wait modal -->
    <b-modal ref="modal-wait" ok-title="ตกลง" :hide-header=true ok-only centered> 
      <p class="my-4 text-center">กรุณารอสักครู่ เรากำลังเข้าสู่ระบบให้คุณ</p>
      <div class="d-flex justify-content-center mb-3">
        <b-spinner variant="dark"/>
      </div>
    </b-modal>

    <!-- profile modal -->


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
      user: {
        email: "",
        password: ""
      },
      profile: store.state.profile
    };
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
                await FB.logout(function(response) {
                  // facebook user is now logged out
                });
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
          await store.commit('profile_change',currentObj.profile_t);
          currentObj.$router.push("/collectdata/profile");
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
          await store.commit('is_login_change', true);
          await console.log("Login Success");
          await currentObj.get_profile();
        })
        .catch(function(e) {
          currentObj.output = "error";
          console.log("Username or Password is invalid.");
          console.log(e);
          //แสดงข้อความ Username or Password is invalid.
          //ปิด modal
          currentObj.$refs['modal-wait'].hide()
        });
    },
    showWait() {
      this.$refs['modal-profile'].show()
    },
    
  }
};
</script>
