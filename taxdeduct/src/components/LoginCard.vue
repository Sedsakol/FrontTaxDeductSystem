<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">เข้าสู่ระบบ</h4>
          
          <div class="form-group">
            <button block class="btn btn-primary">
              เข้าสู่ระบบด้วย Facebook
            </button>
          </div>
          <div class='hr' id="or">
            <span class='hr-title'>หรือ</span>
          </div>

          <form @submit.prevent = "user_login" id = "form-login">
            
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
                required
              />
            </b-form-group>

            <!-- status debug-->
            <!-- <div>State: <strong>{{ term_status }}</strong></div> -->
            <!-- <div>State: <strong>{{ email }}</strong></div> -->

            <button type="submit" class="btn btn-primary" block>
              เข้าสู่ระบบ
            </button>
          </form>
          <div class="text-center" id="noAccount">
            ยังไม่มีบัญชีผู้ใช้งาน?
            <router-link to="/regis">สร้างบัญชีตอนนี้</router-link>
          </div>
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
      user: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    // to format email -> lowercase
    formatter(value) {
        return value.toLowerCase()
    },
    user_login(e){
      e.preventDefault();
      let currentObj = this;
      this.axios.post('http://161.246.5.140:8000/auth/obtain_token/', {
          email: this.user.email,
          password: this.user.password
      })
      .then(function (response) {
          currentObj.output = response.data;
          console.log(response.data);
      })
      .catch(function (error) {
          currentObj.output = error;
      });

      if(this.user.email == 'admin@test.com' && this.user.password == 'test123'){
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

.card-body #form-login,
.card-body #form-regis{
  width: 300px;
}

#form-profile .form-row,
#form-result .form-row,
#form-calculate .form-row,
#form-deduct .form-row{
/* background: coral; */
width: 406px;
}

#or{
  margin-top: 30px;
  margin-bottom: 30px;
}

#noAccount{
  margin-top: 20px;
}
</style>
