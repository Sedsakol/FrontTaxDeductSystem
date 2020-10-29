<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">สร้างบัญชี</h4>

          <form @submit.prevent = "user_regis" id = "form-regis">
            <div class="form-group">
              <button block class="btn btn-primary">เข้าสู่ระบบด้วย Facebook</button>
            </div>
            <div class='hr'>
              <span class='hr-title'>หรือ</span>
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

            <button block class="btn btn-primary" type="submit">สร้างบัญชี</button>

            <div class="text-center">
              มีบัญชีผู้ใช้งานอยู่แล้ว?
              <router-link to="/login">เข้าสู่ระบบตอนนี้</router-link>
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
      // if(this.password !== '' && this.confirm_password !== '' && this.password === this.confirm_password){
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
    user_regis(){
      // if(this.email !== '' && this.password_match === true && this.term_status === 'accepted'){
      if(this.user !== '' && this.password_match === true && this.user.term_status === 'accepted'){
        this.$router.push('/login')
        console.log('submit');
        // this.dispatch('user_regis',{email: this.email, password: this.password})
      }
      if(this.password_match !== true){
        console.log('password not match');
        return
      }
      return
    }
  },

  
};
</script>

<style>
div.hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #bdbdbd;
  text-align: center;
  height: 0px;
  line-height: 0px;
  /* width: 300px; */
}
.hr-title {
  background-color: #fff;
  padding: 0 8px;
}
.fullwidth {
  width: 300px;
  align-items: center;
}
#card a {
  color: #57A3B3;
}

</style>
