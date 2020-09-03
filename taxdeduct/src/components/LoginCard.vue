<template>
  <div>
    <div class="d-flex justify-content-md-center"> 
      <div class="card text-center w-50 col-md-auto">
        <div class="card-body ">
          <h4 class="card-title mb-4 mt-1">เข้าสู่ระบบ</h4>
          <form>
            <div class="form-group social-btn">
              <a href="#" class="btn btn-primary btn-block btn-facebook"
                ><i class="fa fa-facebook"></i>
                เข้าสู่ระบบด้วย Facebook
              </a>
              <!-- <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>
                  เข้าสู่ระบบด้วย Facebook
                  </a> -->
            </div>
            <hr />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="อีเมล"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="รหัสผ่าน"
                required
              />
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label"
                >ยอมรับข้อตกลงและเงื่อนไขการใช้งาน</label
              >
            </div>
            <!-- <input
                  type="submit"
                  class="btn btn-primary btn-block"
                  value="เข้าสู่ระบบ"
                  /> -->
            <button type="submit" class="btn btn-primary btn-block">
              เข้าสู่ระบบ
            </button>
            <div class="d-flex justify-content-center links">
              ยังไม่มีบัญชีผู้ใช้งาน?
              <a href="#" class="ml-2">สร้างบัญชีตอนนี้</a>
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
};
</script>

<style></style>
