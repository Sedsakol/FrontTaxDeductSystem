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
                  <b-col cols = "5"><b-form-input :value=user[0].email disabled /></b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  
                  <b-col cols = "6"><label class="col-form-label">ผูกบัญชีกับ Facebook</label></b-col>
                  <b-col cols = "5"><button id="facebook" size="sm" block class="btn btn-primary">เชื่อมต่อ Facebook</button></b-col>
                  <!-- <b-col cols = "5"><b-form-input value="ไม่ได้ผูกบัญชี" /></b-col> -->
              </b-form-row> 
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">เพศ</label></b-col>
                  <b-col cols = "5">
                    <b-form-select class="form-control" v-model="gender" :value=user[0].gender :disabled=disable_edit >
                      
                    </b-form-select>
                  </b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label" >วันเดือนปีเกิด</label></b-col>
                  <b-col cols = "5"><b-form-datepicker
                    :value = user[0].birthdate
                    :placeholder= user[0].birthdate
                    :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric'}"
                    locale="th"
                    hide-header = "true"
                    label-prev-year = "ปีก่อนหน้า"
                    label-prev-month = "เดือนก่อนหน้า"
                    label-current-month = "เดือนนี้"
                    label-next-month = "เดือนถัดไป"
                    label-next-year = "ปีถัดไป"
                    v-model = "birthdate"
                    :max=maxDate
                    :disabled=disable_edit></b-form-datepicker></b-col>
              </b-form-row> 
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                    <b-col><b-form-input type="number" placeholder="" :value=user[0].salary  :disabled=disable_edit /></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                    <b-col><b-form-input type="number" placeholder="" :value=user[0].other_income  :disabled=disable_edit /></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">สถานะการสมรส</label></b-col>
                    <b-col cols = "5">
                      <b-form-select class="form-control" v-model= "marital" :value=user[0].marital :disabled=disable_edit />
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
                      <b-form-select class="form-control" v-model= "parent_num" :value=user[0].parent_num :disabled=disable_edit />
                    </b-col>
                    <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">จำนวนลูก</label></b-col>
                    <b-col>
                      <b-form-select class="form-control" v-model= "child_num" :value=user[0].child_num :disabled=disable_edit />
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
              <button @click="save_profile" class="btn btn-primary" block>
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
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

      return {
        gender: '',
        birthdate: '',
        salary: '',
        other_income: '',
        marital: '0',
        parent_num: '0',
        child_num: '0',
        disable_edit: true,
        maxDate: today,
        // disabledDates: maxdate,
        user: store.state.user
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
        let new_user = {
          gender: this.gender,
          birthdate : this.birthdate,
          salary : this.salary,
          other_income : this.other_income,
          parent_num: this.parent_num,
          child_num : this.child_num
        }

        await store.commit('profile_change', new_user)
        await this.edit_profile_change()

        
      }
    }
}

</script>

<style>

</style>