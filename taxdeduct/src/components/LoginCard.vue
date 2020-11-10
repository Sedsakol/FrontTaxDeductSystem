<template>
  <div id="card">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">เข้าสู่ระบบ</h4>

          <form @submit.prevent="user_login" id="form-login">
            <b-form-group>
              <button id="facebook" block class="btn btn-primary">
              เข้าสู่ระบบด้วย Facebook</button>
            </b-form-group>

            <div class="hr" id="or">
              <span class="hr-title">หรือ</span>
            </div>

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
          console.log("Login Success");
        })
        .catch(function() {
          currentObj.output = "error";
          console.log("Username or Password is invalid.");
          //แสดงข้อความ Username or Password is invalid.
        });
      if (currentObj.output !== "error") {
        this.$cookies.set("token", currentObj.output);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>

#noAccount {
  margin-top: 20px;
}

</style>
