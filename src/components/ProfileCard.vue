<template>
  <div id="profilecard">
    <div class="card">
      <div class="card-body">
        <h4 class="text-center card-title">โปรไฟล์</h4>
        
        <form id = "form-profile">
          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label">อีเมล</label></b-col>
                <b-col cols = "5"><b-form-input :value=user.email disabled /></b-col>
            </b-form-row> 
          </b-form-group>

          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label">ผูกบัญชีกับ Facebook</label></b-col>
                <b-col cols = "5">
                  <button id="facebook" size="sm" block class="btn btn-primary" v-if="!user.facebook_id" v-on:click="facebook_login" :disabled=disable_edit >เชื่อมต่อ Facebook</button>
                  <button id="facebook" size="sm" block class="btn btn-primary" disabled v-if="user.facebook_id">Facebook Connected</button>
                </b-col>
            </b-form-row> 
          </b-form-group>

          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label">เพศ</label></b-col>
                <b-col cols = "5">
                  <b-form-select 
                  class="form-control" 
                  v-model="user.gender" 
                  :options="gender_ops"
                  value-field="value"
                  text-field="text"
                  :disabled=disable_edit />
                </b-col>
            </b-form-row> 
          </b-form-group>

          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label" >วันเดือนปีเกิด</label></b-col>
                <b-col cols = "5">
                  <b-form-datepicker
                    class="form-control" 
                    v-model = "user.birthdate"
                    :value = user.birthdate
                    :placeholder= user.birthdate
                    :date-format-options="{day: 'numeric' , month: 'numeric',year: 'numeric'}"
                    locale="th"
                    :hide-header = true
                    label-prev-year = "ปีก่อนหน้า"
                    label-prev-month = "เดือนก่อนหน้า"
                    label-current-month = "เดือนนี้"
                    label-next-month = "เดือนถัดไป"
                    label-next-year = "ปีถัดไป"
                    :max=maxDate
                    :disabled=disable_edit >
                  </b-form-datepicker>
                </b-col>
            </b-form-row> 
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                  <b-col><b-form-input type="number" placeholder="" v-model="user.salary" :value=user.salary :disabled=disable_edit /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                  <b-col><b-form-input type="number" placeholder="" v-model="user.other_income" :value=user.other_income  :disabled=disable_edit /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">สถานะการสมรส</label></b-col>
                  <b-col cols = "5">
                    <b-form-select 
                    class="form-control" 
                    v-model= "user.marriage" 
                    :value=user.marriage 
                    value-field="value"
                    text-field="text"
                    :disabled=disable_edit 
                    :options="marriage_ops"/>
                  </b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ปกติ/พิการ/ทุพพลภาพ</label></b-col>
                  <b-col cols = "5">
                    <b-form-select 
                    class="form-control" 
                    v-model= "user.infirm" 
                    :value=user.infirm 
                    value-field="value"
                    text-field="text"
                    :disabled=disable_edit 
                    :options="infirm_ops"/>
                  </b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">พ่อ-แม่</label></b-col>
                  <b-col>
                    <b-form-select 
                    class="form-control" 
                    v-model= "user.parent_num" 
                    :value=user.parent_num
                    value-field="value"
                    text-field="text"
                    :disabled=disable_edit 
                    :options="parent_ops" />
                  </b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">จำนวนลูก</label></b-col>
                  <b-col><b-form-input type="number" placeholder="" v-model="user.child_num" :value=user.child_num  :disabled=disable_edit /></b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
          </b-form-group>
        </form>
        
        <button v-if=disable_edit @click="edit_profile_change" class="btn btn-primary" block id="fullbutton">
          แก้ไข
        </button>
        
        <div v-else>
          <b-row>
            <b-col>
              <button @click="edit_profile_change" class="btn btn-outline-primary" block id="fullbutton">
                ยกเลิก
              </button>
            </b-col>
            <b-col>
              <button @click="save_profile" class="btn btn-primary" block id="fullbutton">
                บันทึก
              </button>
            </b-col>
          </b-row>

          <br>

          <b-row>
            <b-col>
              <button @click="showDelete" class="btn btn-danger" block id="fullbutton">
                ลบบัญชีผู้ใช้งาน
              </button>
            </b-col>
          </b-row>
        </div>

        <b-modal ref="modal-delete" 
          ok-title="ลบ" 
          cancel-title="ยกเลิก" 
          ok-variant="outline-danger"
          cancel-variant="danger"
          :hide-header=true 
          @ok ="delete_account"
          centered> 
          <p class="my-4 text-center">ต้องการจะลบบัญชีผู้ใช้งาน และข้อมูลทั้งหมด ?</p>
        </b-modal>
 
        <b-modal ref="modal-delete-wait" ok-title="ตกลง" :hide-header=true ok-only centered> 
          <p class="my-4 text-center">กรุณารอสักครู่ เรากำลังลบบัญชีให้คุณ</p>
          <div class="d-flex justify-content-center mb-3">
            <b-spinner variant="dark"/>
          </div>
        </b-modal>

        <b-modal ref="modal-facebook" ok-title="ตกลง" :hide-header=true ok-only centered> 
          <p class="my-4 text-center">กรุณาเลือก Login with Facebook ในการเข้าสู่ระบบครั้งถัดไป</p>
          <b-img center fluid alt="" src="../assets/images/btn_facebook.svg"></b-img>
        </b-modal>

      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import firebase from "firebase/app";
import 'firebase/auth';  
export default {
    name: "ProfileCard",
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

      return {
        birthdate: 'วัน/เดือน/ปี',
        salary: '',
        other_income: '',
        marriage: 1,
        parent_num: 0,
        child_num: 0,
        infirm: 1,
        disable_edit: true,
        maxDate: today,
        // disabledDates: maxdate,
        user: store.state.profile,
        
        gender_ops: [
          { value: '1', text: 'หญิง' },
          { value: '2', text: 'ชาย' },
        ],
        marriage_ops: [
          { value: '1', text: 'โสด' },
          { value: '2', text: 'สมรสแล้ว' },
          { value: '3', text: 'หย่า' },
        ],
        parent_ops: [
          { value: '0', text: '0' },
          { value: '1', text: '1' },
          { value: '2', text: '2' },
          { value: '3', text: '3' },
          { value: '4', text: '4' }
        ],
        infirm_ops: [
          { value: '1', text: 'ปกติ' },
          { value: '2', text: 'พิการ' },
          { value: '3', text: 'ทุพพลภาพ' },
        ]
      }
    },
    
    methods: {
      edit_profile_change() {
        if (this.disable_edit == true){
          this.disable_edit = false
        } 
        else {
          this.disable_edit = true
        }
        return this.disable_edit
      },
      async save_profile(){
        if (this.user.birthdate != 'วัน/เดือน/ปี'){
          var bd = this.user.birthdate.split("-")
          
          var bd_format = bd[2] + '/' + bd[1] + '/' + bd[0]
          console.log(bd,bd_format)
        }

        var new_user = {
          email: this.user.email,
          gender: this.user.gender,
          birthdate : (this.user.birthdate === 'วัน/เดือน/ปี')? null : bd_format,
          salary : (this.user.salary) ? this.user.salary : 0,
          other_income :  (this.user.other_income) ? this.user.other_income : 0,
          parent_num:  (this.user.parent_num) ? this.user.parent_num : 0,
          child_num :  (this.user.child_num) ? this.user.child_num : 0,
          infirm:  (this.user.infirm) ? this.user.infirm : 1,
          marriage: (this.user.marriage) ? this.user.marriage : 1,
          facebook_id: this.user.facebook_id
        }

        // ส่ง api ไป save ที่ back ด้วย
        let currentObj = this
        console.log(new_user)
        if (this.$cookies.get('token')){
          await this.axios
          .post("profile/", new_user,{
            headers: {
              'Authorization': currentObj.$cookies.get('token'),
              'Content-Type': 'application/json'
            }
          })
          .then(async function(response) {
            console.log("saved profile");
            console.log(response)
            await store.commit('profile_change', new_user)
            await currentObj.$cookies.set("profile", new_user);
            await currentObj.edit_profile_change();
          })
          .catch(function(error) {
            console.log(error);
          });
        }
        else{
          console.log('pls login naja')
        }
      },
      async facebook_login() {
        console.log('facebook login still development pls we will be back as soon as posible')
        /* let currentObj = this;
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
                //check profile
                if ()
                //show modal-after-facebook
                // this.$refs['modal-facebook'].show()
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
          }); */
      },
      // modal confirm delete user
      showDelete() {
        this.$refs['modal-delete'].show()
      },
      showFacebook() {
        this.$refs['modal-facebook'].show()
      },
      hideDelete() {
        this.$refs['modal-delete'].hide()
      },
      // modal wait
      showWait() {
        this.$refs['modal-delete-wait'].show()
      },
      hideWait() {
        this.$refs['modal-delete-wait'].hide()
      },
      delete_account() {
        console.log('deleting account');
        let currentObj = this;
        currentObj.$refs['modal-delete-wait'].show()
        this.axios
          .post("delete_account/", {'email': currentObj.user.email },{
            headers: {
              'Authorization': currentObj.$cookies.get('token'),
              'Content-Type': 'application/json'
            }
          })
          .then(async function(response) {
            console.log(response.data)
            if (response.data.status == 200) {
              console.log('delete account complete');
              currentObj.$cookies.keys().forEach(cookie => currentObj.$cookies.remove(cookie))
              currentObj.$router.push("/");
              currentObj.$router.go();
            }
          })
          .catch(function(error) {
            console.log(error);
            currentObj.$refs['modal-delete-wait'].hide()
        });
      },
    }

}

</script>

<style>

</style>