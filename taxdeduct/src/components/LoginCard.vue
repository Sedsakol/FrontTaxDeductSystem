<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card text-center w-50 col-md-auto">
        <div class="card-body">
          <h4 class="card-title mb-4 mt-1">เข้าสู่ระบบ</h4>
          <form @submit.prevent = "user_login" id = "login">
            <div class="form-group">
              <button block class="btn btn-primary">เข้าสู่ระบบด้วย Facebook</button>
            </div>
            <div class='hr'>
              <span class='hr-title'>หรือ</span>
            </div>
            <b-form-group>
              <b-form-input 
                v-model = "email" 
                type = "email"
                placeholder = "อีเมล"
                lazy-formatter
                :formatter = "formatter"
                required
              />
            </b-form-group>

            <b-form-group>
              <b-form-input 
                v-model = "password" 
                type = "password"
                placeholder = "รหัสผ่าน"
                required
              />
            </b-form-group>

            <!-- status debug-->
            <!-- <div>State: <strong>{{ term_status }}</strong></div> -->
            <!-- <div>State: <strong>{{ email }}</strong></div> -->

            <button type="submit" class="btn btn-primary" block>
              เข้าสู่ระบบ
            </button>
            <div class="d-flex justify-content-center links">
              ยังไม่มีบัญชีผู้ใช้งาน?
              <router-link to="/regis"><a href="#" class="ml-2">สร้างบัญชีตอนนี้</a></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginCard",

  data(){
    return{
      // user: {
      //   email: '',
      //   password: '',
      // },
      email: '',
      password: '',
      term_status: 'not_accepted',
    }
  },

  methods: {
    // comment* to format email -> lowercase
    formatter(value) {
        return value.toLowerCase()
    },
    user_login(){
      if(this.email == 'numtan@gmail.com' && this.password == 'nnn333'){
        this.$router.push('/')
      } 
    }
  }
};


</script>

<style>
.card-body{
  align-self: center;
  
}
.card-body #login{
  width: 300px;
}

</style>
