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
                  <b-col cols = "5"><b-form-input :value=user[0].email  :disabled=disable_edit /></b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ผูกบัญชีกับ Facebook</label></b-col>
                  <b-col cols = "5"><b-form-input value="ไม่ได้ผูกบัญชี" /></b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">เพศ</label></b-col>
                  <b-col cols = "5">
                    <b-form-select class="form-control" v-model= "gender" >
                      
                    </b-form-select>
                  </b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">วันเดือนปีเกิด</label></b-col>
                  <b-col cols = "5"><b-form-datepicker
                    value = "13/02/1999"
                    placeholder="วัน/เดือน/ปี"
                    :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric'}"
                    locale="th"
                    hide-header = "true"
                    label-prev-year = "ปีก่อนหน้า"
                    label-prev-month = "เดือนก่อนหน้า"
                    label-current-month = "เดือนนี้"
                    label-next-month = "เดือนถัดไป"
                    label-next-year = "ปีถัดไป"
                    label-help = ""
                    :disabled= "disabled"></b-form-datepicker></b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                    <b-col><b-form-input type="number" placeholder="" value="0" /></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                    <b-col><b-form-input type="number" placeholder="" value="0" /></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">สถานะการสมรส</label></b-col>
                    <b-col cols = "5">
                      <b-form-select class="form-control" v-model= "marital" />
                    </b-col>
                </b-form-row>
            </b-form-group>

            <!-- <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">พิการ/ทุพพลภาพ</label></b-col>
                    <b-col cols = "5">
                      <b-form-select class="form-control" disabled/>
                    </b-col>
                </b-form-row>
            </b-form-group> -->

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">พ่อ-แม่</label></b-col>
                    <b-col>
                      <b-form-select class="form-control" v-model= "parent_num" />
                    </b-col>
                    <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">จำนวนลูก</label></b-col>
                    <b-col>
                      <b-form-select class="form-control" v-model= "child_num" />
                    </b-col>
                    <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
                </b-form-row>
            </b-form-group>

            <!-- status debug-->
            <!-- <div>State: <strong>{{ term_status }}</strong></div> -->
            <!-- <div>State: <strong>{{ email }}</strong></div> -->
          </form>
          <button v-if=disable_edit @click="edit_profile_change" class="btn btn-primary" block>
            แก้ไข
          </button>
          
          <b-row v-else>
            <b-col>
              <button @click="edit_profile_change" class="btn btn-outline-primary" block>
                ยกเลิก
              </button>
            </b-col>
            <b-col>
              <button class="btn btn-primary" block>
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
import store from "../store/index.js"
export default {
    name: "ProfileCard",
    data() {
      return {
        gender: 'หญิง',
        birthdate: '01/01/1999',
        salary: '10,000',
        other_income: '0',
        marital: 'โสด',
        parent_num: '0',
        child_num: '0',
        disable_edit: true,
        user: store.state.user
      }
    },
    computed: {
      profile() {
        return store.state.user
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
      save_profile(){
        store.commit('profile_change', 
          {
        email: '1234@12374.com',
        gender: 'dsd',
        birthdate : 'asdasd',
        salary : 'asdasd',
        other_income : 'asdasd',
        parent_num: '0',
        child_num : '0',
        infirm : 'sdasd',
        risk : '8',
        facebook_id : 'asdasd'
        }
        )
      }
    }
}

</script>

<style>

</style>