<template>
  <div id="card" :key="change_component_key">
      <div class="content-box">
        <div>
          <h4 class="text-center card-title">ผลการคำนวณภาษี</h4>
          <!-- example position of tax step -->
          <b-img center fluid :src="require('../assets/steptax/step' + stair + '.svg')" alt="" class="pb-4"/>
          <form  id = "form-result">
            <b-form-group>
                <b-form-row>
                    <b-col col lg= "6"><label class="col-form-label">เงินเดือน (ต่อเดือน) x 12</label></b-col>
                    <b-col cols = "5" md="auto"><b-form-input type="text" class="text-right" :value=salary_year disabled/></b-col>
                    <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col col lg= "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                    <b-col cols = "5" md="auto"><b-form-input type="text" class="text-right" :value=other_income disabled/></b-col>
                    <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col col lg= "6"><label class="col-form-label">หักค่าลดหย่อนส่วนบุคคล</label></b-col>
                    <b-col cols = "5" md="auto"><b-form-input class="text-danger text-right" type="text" :value=valueFormatterMinus(allowance_60k) disabled/></b-col>
                    <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col col lg= "6"><label class="col-form-label">หักค่าใช้จ่ายส่วนตัว</label></b-col>
                    <b-col cols = "5" md="auto"><b-form-input class="text-danger text-right" type="text" :value=valueFormatterMinus(allowance_100k) disabled/></b-col>
                    <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col col lg= "6"><label class="col-form-label">ค่าลดหย่อนอื่น ๆ</label></b-col>
                    <b-col cols = "5" md="auto"><b-form-input class="text-danger text-right" type="text" :value=valueFormatterMinus(other_allowance) disabled/></b-col>
                    <b-col col lg = "1"><label class="col-form-label">บาท</label></b-col>
                </b-form-row>
            </b-form-group>
          </form>

          <div class="pb-3">
              <h4 class="text-center">รวมเงินได้สุทธิ <span class="text-mainblue" >{{ this.net_income }}</span> บาท</h4>
              <h4 class="text-center">ภาษีที่ต้องจ่าย <span class="text-mainblue">{{ this.tax }}</span> บาท</h4>
          </div>

          <div class="d-flex justify-content-md-center">
              <router-link to = "/tax/deduct" class="pr-4">
                  <button type="button" class="btn btn-outline-primary" id="regularbutton">
                      ย้อนกลับ
                  </button>
              </router-link>  
              <router-link to = "/suggestion">
                <button class="btn btn-primary" id="regularbutton">
                    ลงทุนเพื่อลดหย่อนภาษี
                </button>
              </router-link> 
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import store from "../store/index.js"
export default {
    name: "ResultCard",
    data() {
      return {
        mainProps: { blank: true, blankColor: '#D0D0D0', width: 406, height: 162},
        // allowance_60k == ค่าลดหย่อนส่วนตัว 60k
        // allowance_100k == ค่าใช้จ่านส่วนบุคคล 100k
        // other_allowance == ค่าลดหย่อนอื่น ๆ ที่เหลือ
        salary_year: store.state.tax.salary*12,
        other_income: store.state.tax.other_income,

        allowance_60k: this.valueFormatter(60000),
        allowance_100k: store.state.result_tax.personal_allowance,
        other_allowance: store.state.result_tax.allowance, 
        net_income: store.state.result_tax.net_income,
        tax: store.state.result_tax.tax,
        stair: store.state.result_tax.stair,

        change_component_key : 0

      }
    },
    mounted(){
      this.load_result_tax_from_cookie()
      this.load_new_tax_from_cookie()
    },
    methods : {
        load_result_tax_from_cookie(){
            if (this.$cookies.isKey("result_tax")){
                let result_tax = this.$cookies.get("result_tax")
                store.commit('result_tax_change', result_tax)
                
                this.allowance_100k = this.valueFormatter(store.state.result_tax.personal_allowance)
                this.other_allowance = this.valueFormatter(store.state.result_tax.allowance)
                this.net_income = this.valueFormatter(store.state.result_tax.net_income)
                this.tax = this.valueFormatter(store.state.result_tax.tax)
                this.stair = store.state.result_tax.stair

                this.change_component_key += 1
            }
        },
        load_new_tax_from_cookie(){
          if (this.$cookies.isKey("new_tax")){
            let new_tax = this.$cookies.get("new_tax")
            store.commit('tax_change', new_tax)
            this.salary_year = this.valueFormatter(store.state.tax.salary*12)
            this.other_income = this.valueFormatter(store.state.tax.other_income)

            this.change_component_key += 1
          }
        },
        valueFormatter(value) {
          // any character that's not a digit
          var fixedValue = String(value).split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
          // var formatValue = Number(fixedValue).toLocaleString();
          return fixedValue;
        },
        // adding ( - )
        valueFormatterMinus(value) {
          // any character that's not a digit
          var fixedValue = String(value).replace(/[^0-9]/g, ""); 
          var formatValue = Number(fixedValue).toLocaleString();
          return "- " + formatValue;
        },
    }
}

</script>

<style scoped>
  #space{
    margin-top:30px;
    margin-bottom: 30px;
  }
</style>>