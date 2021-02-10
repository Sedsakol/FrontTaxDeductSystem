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

          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': completeStatus.value === false }">เพศ</label>
                  <span :class="{ 'text-danger': completeStatus.value === false }">*</span>
                </b-col>
                <b-col cols = "5">
                  <b-form-select 
                  class="form-control" 
                  v-model.trim="$v.user.gender.$model"
                  :options="gender_ops"
                  value-field="value"
                  text-field="text" />
                  <i class="fa fa-chevron-down"></i>
                </b-col>
            </b-form-row> 
          </b-form-group>

          <b-form-group>
            <b-form-row>
                <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': !completeStatus.value === false }">วันเดือนปีเกิด</label>
                  <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                </b-col>
                <b-col cols = "5">
                  <b-form-datepicker
                    class="form-control" 
                    v-model.trim="$v.user.birthdate.$model"
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
                  <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': completeStatus.value === false }">เงินเดือน (ต่อเดือน)</label>
                    <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                  </b-col>
                  <b-col>
                  <b-form-input type="text" placeholder="" 
                  v-model.trim="$v.user.salary.$model" :value=user.salary
                  :formatter="valueFormatter" class="text-right" /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': !completeStatus.value === false }">รายได้อื่น ๆ (ต่อปี)</label>
                    <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                  </b-col>
                  <b-col><b-form-input type="text" placeholder="" 
                  v-model.trim="$v.user.other_income.$model" :value=user.other_income
                  :formatter="valueFormatter" class="text-right" /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': !completeStatus.value === false }">สถานะการสมรส</label>
                    <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                  </b-col>
                  <b-col cols = "5">
                    <b-form-select 
                    class="form-control" 
                    v-model.trim="$v.user.marriage.$model"
                    :value=user.marriage 
                    value-field="value"
                    text-field="text" 
                    :options="marriage_ops"/>
                  </b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': !completeStatus.value === false }">ปกติ/พิการ/ทุพพลภาพ</label>
                    <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                  </b-col>
                  <b-col cols = "5">
                    <b-form-select 
                    class="form-control" 
                    v-model.trim="$v.user.infirm.$model"
                    :value=user.infirm 
                    value-field="value"
                    text-field="text"
                    :options="infirm_ops" />
                  </b-col>
              </b-form-row>
          </b-form-group>

          <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': !completeStatus.value === false }">จำนวนพ่อ-แม่</label>
                    <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                  </b-col>
                  <b-col>
                    <b-form-select 
                    class="form-control" 
                    v-model.trim="$v.user.parent_num.$model"
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
                  <b-col cols = "6"><label class="col-form-label" :class="{ 'text-danger': !completeStatus.value === false }">จำนวนลูก</label>
                    <span :class="{ 'text-danger': !completeStatus.value === false }">*</span>
                  </b-col>
                  <b-col><b-form-input type="number" placeholder="" 
                  v-model.trim="$v.user.child_num.$model" :value=user.child_num /></b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
              <b-form-invalid-feedback id="input-1-live-feedback">{{ completeStatus.descrip }}</b-form-invalid-feedback>
          </b-form-group>
        </form>

        <button @click="save_profile" class="btn btn-primary" block id="fullbutton">
          ถัดไป
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import store from "../store/index.js";
import firebase from "firebase/app";
import 'firebase/auth';  
export default {
    name: "ProfileCard2",
    mixins: [validationMixin],
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

      return {
        //
        birthdate: 'วัน/เดือน/ปี',
        salary: '',
        other_income: '',
        marriage: 1,
        parent_num: 0,
        child_num: 0,
        infirm: 1,
        //
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
        ],
        completeStatus: {
          value: null,
          descrip: ""
        }
      }
    },
    validations: {
      user: {
        gender: { required },
        birthdate: { required },
        salary: { required },
        other_income: { required },
        marriage: { required },
        infirm: { required },
        parent_num: { required },
        child_num: { required },
      },
    },
    computed: {

    },

    // end computed tag
    methods: {
      async save_profile(){
        console.log("submit next!");
        this.$v.user.$touch();
        if (this.$v.user.$anyError) {
          console.log("validation error");
          this.completeStatus.value = false
          this.completeStatus.descrip = "กรุณากรอกข้อมูลให้ครบถ้วน"
        }
        else {
          this.completeStatus.value = null
          this.completeStatus.descrip = ""
          if (this.user.birthdate != 'วัน/เดือน/ปี'){
            var bd = this.user.birthdate.split("-")
            
            var bd_format = bd[2] + '/' + bd[1] + '/' + bd[0]
            console.log(bd,bd_format)
          }
          if (this.user.salary) {
            var salary_format = Number(String(this.user.salary).replace(/[^0-9]/g, ""))
          }
          if (this.user.other_income) {
            var other_income_format = Number(String(this.user.other_income).replace(/[^0-9]/g, ""))
          }

          var new_user = {
            email: this.user.email,
            gender: this.user.gender,
            birthdate : (this.user.birthdate === 'วัน/เดือน/ปี')? null : bd_format,
            salary : (this.user.salary) ? salary_format : 0,
            other_income :  (this.user.other_income) ? other_income_format : 0,
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
              console.log("Saved profile");
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
            console.log('Please login first.')
          }
        }
      },
      valueFormatter(value) {
        // any character that's not a digit
        var fixedValue = String(value).replace(/[^0-9]/g, ""); 
        var formatValue = Number(fixedValue).toLocaleString();
        return formatValue;
      },
      valueFormatter2(value) {
        // any character that's not a digit
        var fixedValue = String(value).replace(/[^0-9]/g, ""); 
        var formatValue = Number(fixedValue);
        return formatValue;
      },

    }

}

</script>
