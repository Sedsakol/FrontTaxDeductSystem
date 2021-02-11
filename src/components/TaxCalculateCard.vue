<template>
    <div id="card" :key="change_component_key">
      <div class="card">
        <div class="card-body">
          <h4 class="text-center card-title">คำนวณภาษี</h4>

          <form id = "form-calculate">
            <b-form-group class="label-cols-lg">
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                  <b-col cols = "5"><b-form-input type="text" class="form-control text-right" placeholder="0"
                  v-model="salary" :formatter="valueFormatter" /></b-col>
                  <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                  <b-col cols = "5"><b-form-input type="text" class="form-control text-right" placeholder="0" 
                  v-model="other_income" :formatter="valueFormatter" /></b-col>
                  <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">สถานะภาพการสมรส</label></b-col>
                  <b-col cols = "5">
                    <b-form-select class="form-control" v-model="marital" :options= "marital_ops"/>
                  </b-col>
                  <b-col col lg = "1"/>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">จำนวนพ่อแม่ที่ลดหย่อนได้</label>
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
                  <b-col cols = "5">
                    <b-form-select class="form-control" v-model="parent_num_dis" :options= "parent_ops" />
                  </b-col>
                  <b-col col lg = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">ลูกแท้ที่เกิดก่อน พ.ศ.2561</label>
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
                  <b-col cols = "5"><b-form-input type="text" class="form-control" placeholder="0" 
                  v-model="child_before_2561" :formatter="valueFormatter" /></b-col>
                  <b-col col lg = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
              <span class="text-danger" v-if="!$v.child_before_2561.between" >*กรุณากรอกข้อมูลตามจำนวนจริง</span>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">ลูกแท้ที่เกิดหลัง พ.ศ.2561</label>
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
                  <b-col cols = "5"><b-form-input type="text" class="form-control" placeholder="0" 
                  v-model="child_after_2561" :formatter="valueFormatter" /></b-col>
                  <b-col col lg = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
              <span class="text-danger" v-if="!$v.child_after_2561.between" >*กรุณากรอกข้อมูลตามจำนวนจริง</span>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col col lg= "6"><label class="col-form-label">ลูกบุญธรรม</label>
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
                  <b-col cols = "5"><b-form-select class="form-control" v-model="protege" :options= "protege_ops" /></b-col>
                  <b-col col lg = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>
          </form>

          <button @click="next" class="btn btn-primary" id="fullbutton">
            ถัดไป
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, between } from "vuelidate/lib/validators";
import store from "../store/index.js"
// import PopoverTemplate from "@/components/PopoverTemplate.vue";
export default {
  name: "TaxCalculateCard",
  mixins: [validationMixin],
  components : {
        // PopoverTemplate,
    },
  data() {
    return {
      salary: store.state.tax.salary,
      other_income: store.state.tax.other_income,
      marital: store.state.tax.marital,
      parent_num_dis: store.state.tax.parent_num_dis,
      child_before_2561: store.state.tax.child_before_2561,
      child_after_2561: store.state.tax.child_after_2561,
      protege: store.state.tax.protege,

      change_component_key: 0,

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
  validations: {
    child_before_2561: { between: between (0, 100) },
    child_after_2561: { between: between (0, 100) }
  },
  mounted(){
    this.load_new_tax_from_cookie()
  },
  methods: {
    next() {
      let new_tax = {
          salary: this.valueFormatter2(this.salary),
          other_income: this.valueFormatter2(this.other_income),
          marital: this.marital,
          parent_num_dis: this.parent_num_dis,
          child_before_2561: this.valueFormatter2(child_before_2561),
          child_after_2561: this.valueFormatter2(child_after_2561),
          protege: this.protege,
        }
      this.$cookies.set('new_tax',new_tax);
      store.commit('tax_change', new_tax)
      this.change_component_key += 1
      this.$router.push("/taxDeduct");
    },
    load_new_tax_from_cookie(){
      if (this.$cookies.isKey("new_tax")){
        let new_tax = this.$cookies.get("new_tax")
        store.commit('tax_change', new_tax)
        this.salary= this.valueFormatter(store.state.tax.salary)
        this.other_income= this.valueFormatter(store.state.tax.other_income)
        this.marital= store.state.tax.marital
        this.parent_num_dis=  store.state.tax.parent_num_dis
        this.child_before_2561= this.valueFormatter(store.state.tax.child_before_2561)
        this.child_after_2561= this.valueFormatter(store.state.tax.child_after_2561)
        this.protege= store.state.tax.protege
        
        this.change_component_key += 1
      }
      else{
        this.salary= store.state.profile.salary
        this.other_income= store.state.profile.other_income
      }
    },
    valueFormatter(value) {
      // any character that's not a digit
      var fixedValue = String(value).replace(/[^0-9]/g, ""); 
      var formatValue = Number(fixedValue).toLocaleString();
      return formatValue;
    },
    valueFormatter2(value) { 
      var fixedValue = String(value).replace(/[^0-9]/g, ""); 
      var formatValue = Number(fixedValue)
      return formatValue;
    }
  }
};
</script>

<style>



</style>