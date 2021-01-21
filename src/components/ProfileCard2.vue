<template>
  <div id="profilecard">
    <div class="card">
      <div class="card-body">
        <h4 class="text-center card-title">กรอกข้อมูลโปรไฟล์</h4>
        
        <form id = "form-profile">
          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label">อีเมล</label></b-col>
                <b-col cols = "5"><b-form-input :value=user.email disabled /></b-col>
            </b-form-row> 
          </b-form-group>

          <!--
          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label">ผูกบัญชีกับ Facebook</label></b-col>
                <b-col cols = "5">
                  <button id="facebook" size="sm" block class="btn btn-primary" v-if="!user.facebook_id" v-on:click="facebook_login" disabled >เชื่อมต่อ Facebook</button>
                  <button id="facebook" size="sm" block class="btn btn-primary" disabled v-if="user.facebook_id">Facebook Connected</button>
                </b-col>
            </b-form-row> 
          </b-form-group>
          -->

          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label">เพศ</label></b-col>
                <b-col cols = "5">
                  <b-form-select 
                  class="form-control" 
                  v-model="user.gender" 
                  :options="gender_ops"
                  value-field="value"
                  text-field="text" />
                  <i class="fa fa-chevron-down"></i>
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
                    :max=maxDate >
                  </b-form-datepicker>
                </b-col>
            </b-form-row> 
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                  <b-col><b-form-input type="number" placeholder="" v-model="user.salary" :value=user.salary /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                  <b-col><b-form-input type="number" placeholder="" v-model="user.other_income" :value=user.other_income /></b-col>
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
                    :options="infirm_ops" />
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
                    :options="parent_ops" />
                  </b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">จำนวนลูก</label></b-col>
                  <b-col><b-form-input type="number" placeholder="" v-model="user.child_num" :value=user.child_num /></b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
          </b-form-group>
        </form>

        <button @click="save_profile" class="btn btn-primary" block id="fullbutton">
          บันทึก
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import firebase from "firebase/app";
import 'firebase/auth';  
export default {
    name: "ProfileCard2",
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
        disable_edit: false,
        maxDate: today,
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
            currentObj.$router.push("/collectdata/question");
            currentObj.$router.go();
          })
          .catch(function(error) {
            console.log(error);
          });
        }
        else{
          console.log('pls login naja')
        }
      },
    }

}

</script>
