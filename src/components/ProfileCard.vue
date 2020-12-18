<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">โปรไฟล์</h4>
          
          <form  id = "form-profile">
            <!-- <b-form-group 
             label-cols = "4" 
             label-cols-lg = "6" 
             label = "อีเมล">
                <b-form-input disabled/>
            </b-form-group> -->
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
                    <button id="facebook" size="sm" block class="btn btn-primary" v-if="!user.facebook_id" v-on:click="facebook_login">เชื่อมต่อ Facebook</button>
                    <button id="facebook" size="sm" block class="btn btn-primary" disabled v-if="user.facebook_id">Facebook Connected</button>
                  </b-col>
                  <!-- <b-col cols = "5"><b-form-input value="ไม่ได้ผูกบัญชี" /></b-col> -->
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
                  <b-col cols = "5"><b-form-datepicker
                    v-model = "user.birthdate"
                    :value = user.birthdate
                    :placeholder= user.birthdate
                    :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric'}"
                    locale="th"
                    hide-header = "true"
                    label-prev-year = "ปีก่อนหน้า"
                    label-prev-month = "เดือนก่อนหน้า"
                    label-current-month = "เดือนนี้"
                    label-next-month = "เดือนถัดไป"
                    label-next-year = "ปีถัดไป"
                    :max=maxDate
                    :disabled=disable_edit></b-form-datepicker></b-col>
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
                      :options="marital_ops"/>
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

            <!-- status debug-->
            <!-- <div>State: <strong>{{ term_status }}</strong></div> -->
            <!-- <div>State: <strong>{{ email }}</strong></div> -->
          </form>
          <button v-if=disable_edit @click="edit_profile_change" class="btn btn-primary" block id="fullbutton">
            แก้ไข
          </button>
          
          <b-row v-else>
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
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import firebase from "firebase";
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
        marital_ops: [
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
          { value: '0', text: 'ปกติ' },
          { value: '1', text: 'พิการ' },
          { value: '2', text: 'ทุพพลภาพ' },
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
        var new_user = {
          email: user.email,
          gender: user.gender,
          birthdate : user.birthdate,
          salary : user.salary,
          other_income : user.other_income,
          parent_num: user.parent_num,
          child_num : user.child_num,
          infirm: user.infirm,
          marriage: user.marriage,
          facebook_id: user.facebook_id
        }

        // ส่ง api ไป save ที่ back ด้วย
        let currentObj = this

        if (this.$cookies.get('token')){
          await this.axios
          .get("profile/", new_user, {
            headers: {
              'Authorization': this.$cookies.get('token')
            }
          })
          .then(async function(response) {
            console.log("saved profile");
            await store.commit('profile_change', new_user)
            await this.$cookies.set("profile", new_user);
            await this.edit_profile_change();
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
      }
    }
}

</script>

<style>

</style>