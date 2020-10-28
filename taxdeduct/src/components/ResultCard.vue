<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">ผลการคำนวณภาษี</h4>
          <!-- example position of tax step -->
          <b-img v-bind = "mainProps"></b-img> <p>
          <form @submit.prevent = "" id = "form-result">
            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน) x 12</label></b-col>
                    <b-col><b-form-input type="number" placeholder="1,200,000" disabled/></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                    <b-col><b-form-input type="number" placeholder="0" disabled/></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">หักค่าลดหย่อนส่วนบุคคล</label></b-col>
                    <b-col><b-form-input type="number" placeholder="-60,000" disabled/></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col cols = "6"><label class="col-form-label">หักค่าใช้จ่ายส่วนตัว</label></b-col>
                    <b-col><b-form-input type="number" placeholder="-100,000" disabled/></b-col>
                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <h4 class="text-center">รวมเงินได้สุทธิ <span>{{ salary }} 1,040,000</span> บาท</h4>
            <h4 class="text-center">ภาษีที่ต้องจ่าย <span>{{ tax }} 125,000</span> บาท</h4>

            <!-- status debug-->
            <!-- <div>State: <strong>{{ term_status }}</strong></div> -->
            <!-- <div>State: <strong>{{ email }}</strong></div> -->

            <button type="submit" class="btn btn-primary" block>
              แก้ไข
            </button>
          </form>
          
          

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ResultCard",
    data() {
      return {
        mainProps: { blank: true, blankColor: '#D0D0D0', width: 406, height: 162}
      }
    },

}
</script>

<style>
/* remove up-down arrow in number type input  */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] { 
  text-align:right 
  
  }
</style>