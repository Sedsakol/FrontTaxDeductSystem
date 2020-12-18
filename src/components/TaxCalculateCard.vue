<template>
    <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">คำนวณภาษี</h4>

          <form id = "form-calculate">
            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                  <b-col><b-form-input type="number" class="form-control" :value=salary
                  v-model= "salary" min ="0" /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" :value=other_income
                  v-model= "other_income" min ="0" /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">สถานะภาพการสมรส</label></b-col>
                  <b-col cols = "5">
                    <b-form-select class="form-control" v-model= "marital" :options= "marital_ops"/>
                  </b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลดหย่อนพ่อแม่</label>
                    <b-icon font-scale="0.75" class="ml-2" id="popover-parent" icon="exclamation-circle"/>
                    <b-popover target="popover-parent" triggers="hover" placement= "rightbottom">
                      พ่อแม่ของตนเอง (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                        <li>อายุมากกว่า 60 ปี</li>
                        <li>รายได้ทั้งปีไม่เกิน 30,000 บาท</li>
                        <li>เราต้องเป็นลูกแท้ ไม่ใช่ลูกบุญธรรม</li>
                      </ul>
                      พ่อแม่ของคู่สมรส (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                        <li>อายุมากกว่า 60 ปี</li>
                        <li>รายได้ทั้งปีไม่เกิน 30,000 บาท</li>
                        <li>คู่สมรสไม่มีเงินได้</li>
                        <li>คู่สมรสต้องเป็นลูกแท้ ไม่ใช่ลูกบุญธรรม</li>
                      </ul>
                    </b-popover>
                  </b-col>
                  <b-col>
                    <b-form-select class="form-control" v-model= "parent_num_dis" :options= "parent_ops" />
                  </b-col>
                  <b-col cols = "0.75"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลูกแท้ที่เกิดก่อน พ.ศ.2561</label>
                  <b-icon font-scale="0.75" class="ml-2" id="popover-child" icon="exclamation-circle"/>
                  <b-popover target="popover-child" triggers="hover" placement= "rightbottom">
                    เกณฑ์ความสัมพันธ์
                    <ul>
                      <li>ลูกแท้ ๆ ที่ถูกต้องตามกฎหมาย</li>
                    </ul>
                    เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                    <ul>
                      <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                      <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                      <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                      <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                    </ul>
                    เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                    <ul>
                      <li>ไม่มีรายได้</li>
                      <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                    </ul>
                  </b-popover>
                  </b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "child_before_2561" min ="0" /></b-col>
                  <!-- <b-col>
                    <b-form-select class="form-control" v-model= "child_before_2561" :options= "child_ops" />
                  </b-col> -->
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลูกแท้ที่เกิดหลัง พ.ศ.2561</label>
                  <b-icon font-scale="0.75" class="ml-2" id="popover-child2" icon="exclamation-circle"/>
                  <b-popover target="popover-child2" triggers="hover" placement= "rightbottom">
                        เกณฑ์ความสัมพันธ์
                        <ul>
                          <li>ลูกแท้ ๆ ที่ถูกต้องตามกฎหมาย</li>
                        </ul>
                        เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                          <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                        </ul>
                        เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>ไม่มีรายได้</li>
                          <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                        </ul>
                  </b-popover>
                  </b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "child_after_2561" min ="0" /></b-col>
                  <!-- <b-col>
                    <b-form-select class="form-control" v-model= "child_after_2561" :options= "child_ops" />
                  </b-col> -->
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลูกบุญธรรม</label>
                  <b-icon font-scale="0.75" class="ml-2" id="popover-protege" icon="exclamation-circle"/>
                  <b-popover target="popover-protege" triggers="hover" placement= "rightbottom">
                        เกณฑ์ความสัมพันธ์
                        <ul>
                          <li>ลูกบุญธรรมที่จดทะเบียนรับแล้ว</li>
                        </ul>
                        เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                          <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                        </ul>
                        เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>ไม่มีรายได้</li>
                          <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                        </ul>
                  </b-popover>
                  </b-col>
                  <b-col>
                    <b-form-select class="form-control" v-model= "protege" :options= "protege_ops" />
                  </b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>
          </form>
          <button @click="next" class="btn btn-primary" id="fullbutton">
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js"
// import PopoverTemplate from "@/components/PopoverTemplate.vue";
export default {
  name: "TaxCalculateCard",
  components : {
        // PopoverTemplate,
    },
  data() {
    return {
      salary: 0,
      other_income: 0,
      marital: 1,
      parent_num_dis: 0,
      child_before_2561: 0,
      child_after_2561: 0,
      protege: 0,

      tax : store.state.tax,

      marital_ops: [
        { value: '1', text: 'โสด' },
        { value: '2', text: 'สมรสแล้ว (แยกยื่น)' },
        { value: '3', text: 'สมรสแล้ว (คู่สมรสไม่มีเงินได้)' }
      ],
      parent_ops: [
        { value: '0', text: '0' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' }
      ],
      protege_ops: [
        { value: '0', text: '0' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' }
      ],
      
    }
  },
  methods: {
    next() {
      let new_tax = {
          salary: this.salary,
          other_income: this.other_income,
          marital: this.marital,
          parent_num_dis: this.parent_num_dis,
          child_before_2561: this.child_before_2561,
          child_after_2561: this.child_after_2561,
          protege: this.protege,
        }
      
      store.commit('tax_change', new_tax)
      console.log(store.state.tax[0])
      this.$router.push("/taxDeduct");
    }
  }
};
</script>

<style>



</style>