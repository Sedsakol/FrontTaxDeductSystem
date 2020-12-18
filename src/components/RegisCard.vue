<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">สร้างบัญชี</h4>
          <form @submit.prevent = "user_regis" id = "form-regis">
            <b-form-group>
              <button id="facebook" block class="btn btn-primary" disabled>
              Login with Facebook</button>
            </b-form-group>

            <div class="hr" id="or">
              <span class="hr-title">หรือ</span>
            </div>
            
            <b-form-group>
              <b-form-input 
                v-model = "user.email" 
                type = "email"
                placeholder = "อีเมล"
                lazy-formatter
                :formatter = "formatter"
                required
              />
            </b-form-group>

            <b-form-group>
              <b-form-input 
                v-model = "user.password" 
                type = "password"
                placeholder = "รหัสผ่าน"
                :state = "password_match"
                required
              />
            </b-form-group>

            <b-form-group
            invalid-feedback = "">
              <b-form-input 
                v-model = "user.confirm_password" 
                type = "password"
                placeholder = "ยืนยันรหัสผ่าน"
                :state = "password_match"
                required
              />
            </b-form-group>

            <b-form-checkbox
             class = "checkbox text-center"
              v-model = "user.term_status"
              value = "accepted"
              unchecked-value = "not_accepted"
              required
              plain
            >
            ยอมรับ<span class="text-subblue">ข้อตกลง</span>และ<span class="text-subblue">เงื่อนไขการใช้งาน</span>
            </b-form-checkbox>

            <button block class="btn btn-primary mt-3" type="submit" id="fullbutton">สร้างบัญชี</button>

            <div class="text-center mt-2">
              มีบัญชีผู้ใช้งานอยู่แล้ว?
              <router-link to="/login" class="text-subblue">เข้าสู่ระบบตอนนี้</router-link>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RegisCard",
  data(){
    return{
      user: {
        email: '',
        password: '',
        confirm_password: '',
        term_status: '',
      }
    }
  },
  computed: {
    password_match(){
      if(this.user.password !== '' && this.user.confirm_password !== '' && this.user.password === this.user.confirm_password){
        return true
      }
      else if(this.user.password !== this.user.confirm_password){
        return false
      }
      return null
    },

  },
  methods: {
    validateState(value) {
      const { $dirty, $error } = this.$v.form[value];
      return $dirty ? !$error : null;
    },
    // to format email -> lowercase
    formatter(value) {
      return value.toLowerCase();
    },

    async user_regis(){
      let currentObj = this;
      if(this.user !== '' && this.password_match === true && this.user.term_status === 'accepted'){
        await this.axios.post('register/', {
            username: this.user.email,
            password: this.user.password
        })
        .then(async function (response) {
            currentObj.msg = response.data.msg;
            console.log(response.data);
            if(currentObj.msg === 'created user'){
              await currentObj.axios.post('obtain_token/', {
                    email: this.user.email,
                    password: this.user.password
              })
              .then(function (res) {
                  currentObj.output = res.data.token;
                  currentObj.$cookies.set("token",currentObj.output);
                  currentObj.$router.push('/');
              })
              .catch(function () {
                  currentObj.output = 'error';
              });
            }
            else if(currentObj.msg === 'email is already')
            {
              console.log(currentObj.msg)
            }
            else if(currentObj.msg === 'field not complete')
            {
              console.log(currentObj.msg)
            }
        })
        .catch(function (error) {
            currentObj.msg = error;
        });
        // this.dispatch('user_regis',{email: this.email, password: this.password})
      }
      else if(this.password_match !== true){
        console.log('password not match');
      }

    }
  },
  
};
</script>

<style>


</style>
