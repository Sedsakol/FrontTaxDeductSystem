<template>
  <div id="suggestioncard" :key="change_component_key">
    <div class="d-flex justify-content-md-center">
      <div class="card w-75 col-md-auto">
        <!-- <div class="card-body" id="suggestion"> -->
          <!-- <h4 class="text-center card-title">แนะนำการลงทุนเพื่อลดหย่อนภาษี</h4> -->
          <b-row>
            <!-- left side -->
            <b-col cols="8" id = "leftside"> 
              <!-- top -->
              <b-row class="justify-content-md-center mb-4">
                <b-col cols = "6" class="bg-lightblue pt-3">
                  <p class="text-center">รวมเงินได้สุทธิ <span class="text-mainblue" >{{ this.net_income }}</span> บาท</p>
                  <p class="text-center">ภาษีที่ต้องจ่าย <span class="text-mainblue">{{ this.tax }}</span> บาท</p>
                </b-col>
              </b-row>
              <!-- down -->
              <b-row>
                <!-- suggest -->
                <b-col class="ml-5 mr-5" >
                  <h6 class="text-center">การลงทุนที่แนะนำ</h6><p/>
                  <b-img center fluid alt="Responsive image" src="../assets/steptax/step1.svg"></b-img><p/>
                  <b>การลงทุน</b><p/>
                  <b-form-group><b-form-row>
                      <b-col cols = "5" md="auto"><label class="col-form-label">ลงทุน RMF</label>
                      <b-icon font-scale="0.75" class="ml-2" id="popover-rmf" icon="exclamation-circle"/>
                      <b-popover target="popover-rmf" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                              <li>ถือหน่วยลงทุนอย่างน้อย 5 ปี และไม่ขายจนกว่าจะอายุครบ 55 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right"><label class="col-form-label">10,000</label></b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <b-form-group><b-form-row>
                      <b-col cols = "5" md="auto"><label class="col-form-label">ลงทุน SSF</label>
                      <b-icon font-scale="0.75" class="ml-2" id="popover-ssf" icon="exclamation-circle"/>
                      <b-popover target="popover-ssf" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                              <li>ถือหน่วยลงทุนอย่างน้อย 10 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right"><label class="col-form-label">10,000</label></b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <p/><b>ประกันภัย</b><p/>
                  <b-form-group><b-form-row>
                      <b-col cols = "5" md="auto"><label class="col-form-label">เบี้ยประกันชีวิต</label>
                      <b-icon font-scale="0.75" class="ml-2" id="popover-life_insurance" icon="exclamation-circle"/>
                      <b-popover target="popover-life_insurance" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                              <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                              <li>รวมทุกกรมธรรม์</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right"><label class="col-form-label">10,000</label></b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <b-form-group><b-form-row>
                      <b-col cols = "5"><label class="col-form-label">เบี้ยประกันชีวิต</label><div>แบบบำนาญ
                      <b-icon font-scale="0.75" class="ml-2" id="popover-pension_insurance" icon="exclamation-circle"/></div>
                      <b-popover target="popover-pension_insurance" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                              <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                              <li>จ่ายผลประโยชน์เป็นรายงวดสม่ำเสมอ โดยจ่ายเท่ากันทุกงวดหรือในสัดส่วนที่เพิ่มขึ้นตามระยะเวลาเอาประกันก็ได้</li>
                              <li>ช่วงอายุการจ่ายผลประโยชน์ต้องมีอยู่ตั้งแต่ 55-85 ปี หรือมากกว่านั้น</li>
                              <li>จ่ายเบี้ยประกันครบก่อนได้รับผลประโยชน์</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right"><label class="col-form-label">10,000</label></b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <b-form-group><b-form-row class="mt-3">
                    <b-col cols = "5" md="auto">ต้องจ่ายภาษีเพียง</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row></b-form-group>
                </b-col>

                <!-- yours -->
                <b-col class="mr-5">
                  <h6 class="text-center">การลงทุนของฉัน</h6><p/>
                  <b-img center fluid alt="Responsive image" src="../assets/steptax/step1.svg"></b-img><p/>
                  <b>การลงทุน</b><p/>
                  <b-form-group><b-form-row>
                      <b-col cols = "6"><label class="col-form-label">ลงทุน RMF</label>
                      <!-- <b-icon font-scale="0.75" class="ml-2" id="popover-rmf" icon="exclamation-circle"/> -->
                      </b-col>
                      <b-col cols = "4" class="text-right">
                        <b-form-input type="number" class="form-control" v-model="rmf" min ="0" @change="data_change_update" />
                      </b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <b-form-group><b-form-row>
                      <b-col cols = "6"><label class="col-form-label">ลงทุน SSF</label>
                      <!-- <b-icon font-scale="0.75" class="ml-2" id="popover-ssf2" icon="exclamation-circle"/> -->
                      <b-popover target="popover-ssf2" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                              <li>ถือหน่วยลงทุนอย่างน้อย 10 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right">
                        <b-form-input type="number" class="form-control" v-model= "ssf" min ="0" @change="data_change_update" />
                      </b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <p/><b>ประกันภัย</b><p/>
                  <b-form-group><b-form-row>
                      <b-col cols = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label>
                      <!-- <b-icon font-scale="0.75" class="ml-2" id="popover-life_insurance" icon="exclamation-circle"/> -->
                      <b-popover target="popover-life_insurance" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                              <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                              <li>รวมทุกกรมธรรม์</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right">
                        <b-form-input type="number" class="form-control" v-model= "life_insurance" min ="0" @change="data_change_update" />
                      </b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <b-form-group><b-form-row>
                      <b-col cols = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label><div>แบบบำนาญ</div>
                      <!-- <b-icon font-scale="0.75" class="ml-2" id="popover-pension_insurance" icon="exclamation-circle"/></div> -->
                      <b-popover target="popover-pension_insurance" triggers="hover" placement= "rightbottom">
                          เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                          <ul>
                              <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                              <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                              <li>จ่ายผลประโยชน์เป็นรายงวดสม่ำเสมอ โดยจ่ายเท่ากันทุกงวดหรือในสัดส่วนที่เพิ่มขึ้นตามระยะเวลาเอาประกันก็ได้</li>
                              <li>ช่วงอายุการจ่ายผลประโยชน์ต้องมีอยู่ตั้งแต่ 55-85 ปี หรือมากกว่านั้น</li>
                              <li>จ่ายเบี้ยประกันครบก่อนได้รับผลประโยชน์</li>
                          </ul>
                      </b-popover></b-col>
                      <b-col class="text-right">
                        <b-form-input type="number" class="form-control" v-model= "pension_insurance" min ="0" @change="data_change_update" />
                      </b-col>
                      <b-col cols = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
                  </b-form-row></b-form-group>

                  <b-form-group><b-form-row class="mt-3">
                    <b-col cols = "5" md="auto">ต้องจ่ายภาษีเพียง</b-col>
                    <b-col class="text-right">{{ this.tax }}</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row></b-form-group>
                </b-col>
              </b-row><p/>

              <div class="d-flex justify-content-md-center">
                <router-link to = "/result" class="pr-4">
                    <button type="button" class="btn btn-outline-primary" id="regularbutton">
                        ย้อนกลับ
                    </button>
                </router-link>  
                <!-- @click="next" -->
                <router-link to = "/taxCalculate">
                  <button class="btn btn-primary" id="regularbutton">
                      เสร็จสิ้น
                  </button>
                </router-link> 
              </div>
            </b-col>
            
            <!-- right side -->
            <b-col cols="4" class="bg-mainblue" id = "rightside">
              <b-img center fluid alt="Responsive image" class="rounded" src="../assets/images/undraw_2.svg"></b-img><p/>
              <h6 class="text-center text-white pt-4">รูปแบบการลงทุนที่เหมาะสมกับคุณ</h6>
              <h5 class="text-center"><span class="text-lightyell">{{ this.plan_type }}</span></h5>
              <p class="text-center text-white">รายละเอียดการกระจายซื้อ</p>
              <div class="text-white">
                <b-row>
                  <b-col cols = "6">ประกันชีวิต</b-col>
                  <b-col cols = "4" class="text-right ">50,000</b-col>
                  <b-col cols = "2">บาท</b-col>
                </b-row>
                <b-row>
                  <b-col cols = "6">ประกันชีวิตแบบบำนาญ</b-col>
                  <b-col cols = "4" class="text-right">25,000</b-col>
                  <b-col cols = "2" >บาท</b-col>
                </b-row>
                <b-row>
                  <b-col cols = "6">กองทุน SSF</b-col>
                  <b-col cols = "4" class="text-right">25,000</b-col>
                  <b-col cols = "2" >บาท</b-col>
                </b-row>
                <b-row>
                  <b-col cols = "6">กองทุน RMF</b-col>
                  <b-col cols = "4" class="text-right">25,000</b-col>
                  <b-col cols = "2">บาท</b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js"
export default {
    name: "SuggestionCard",
    data() {
      return {
        rmf: store.state.allowance.rmf,
        ssf: store.state.allowance.ssf,
        life_insurance: store.state.allowance.life_insurance,
        pension_insurance: store.state.allowance.pension_insurance,


        // allowance_60k == ค่าลดหย่อนส่วนตัว 60k
        // allowance_100k == ค่าใช้จ่านส่วนบุคคล 100k
        // other_allowance == ค่าลดหย่อนอื่น ๆ ที่เหลือ
        salary_year: store.state.tax.salary*12,
        other_income: store.state.tax.other_income,
        total_income: this.salary_year + this.other_income,


        allowance_60k: 60000,
        allowance_100k: store.state.result_tax.personal_allowance,
        other_allowance: store.state.result_tax.allowance, 
        net_income: store.state.result_tax.net_income,
        tax: store.state.result_tax.tax,
        stair: store.state.result_tax.stair,

        plan_type: 'แบบป้องกันความเสี่ยง',
        user_plan_type : 1,
        plan_type_list : '',


        change_component_key : 1

      }
    },
    mounted(){
      this.load_plan_type_list()
      this.load_result_tax_from_cookie()
      this.load_new_allowance_from_cookie()
      this.load_new_tax_from_cookie()
      this.get_user_plan_type()
    },
    methods : {
        data_change_update(){
          let b = {
            rmf: this.rmf,
            ssf: this.ssf,
            life_insurance: this.life_insurance,
            pension_insurance: this.pension_insurance
          }
          console.log(b)

          let a = {
                salary: store.state.tax.salary,
                other_income: store.state.tax.other_income,
                marital: store.state.tax.marital,
                parent_num_dis: store.state.tax.parent_num_dis,
                child_before_2561: store.state.tax.child_before_2561,
                child_after_2561: store.state.tax.child_after_2561,
                protege: store.state.tax.protege,

                rmf: this.rmf,
                ssf: this.ssf,
                life_insurance: this.life_insurance,
                pension_insurance: this.pension_insurance,

                donation: store.state.allowance.donation,
                edu_donation: store.state.allowance.edu_donation,
                home_loans: store.state.allowance.home_loans,
                provident_fund: store.state.allowance.provident_fund,
                social_security: store.state.allowance.social_security,
                other: store.state.allowance.other

            }

            let currentObj = this;
            this.axios.post('tax/', a)
            .then(function (response) {
                currentObj.output = response.data;
                console.log(currentObj.output)
                currentObj.tax = currentObj.output.tax
            })
            .catch(function (error) {
                currentObj.msg = error;
            });
        },
        load_result_tax_from_cookie(){
            if (this.$cookies.isKey("result_tax")){
                let result_tax = this.$cookies.get("result_tax")
                store.commit('result_tax_change', result_tax)
                
                this.allowance_100k = store.state.result_tax.personal_allowance
                this.other_allowance = store.state.result_tax.allowance
                this.net_income = store.state.result_tax.net_income
                
                this.tax = store.state.result_tax.tax
                this.stair = store.state.result_tax.stair
                

                this.change_component_key += 1
            }
        },
        load_new_allowance_from_cookie(){
            if (this.$cookies.isKey("new_allowance")){
                let new_allowance = this.$cookies.get("new_allowance")
                store.commit('allowance_change', new_allowance)

                this.rmf = store.state.allowance.rmf
                this.ssf = store.state.allowance.ssf
                this.life_insurance = store.state.allowance.life_insurance
                this.pension_insurance = store.state.allowance.pension_insurance
                
                this.change_component_key += 1
                
            }
        },
        load_new_tax_from_cookie(){
            if (this.$cookies.isKey("new_tax")){
                let new_tax = this.$cookies.get("new_tax")
                store.commit('tax_change', new_tax)
                this.salary_year = store.state.tax.salary*12
                this.other_income = store.state.tax.other_income
                this.total_income = this.salary_year + this.other_income

                this.change_component_key += 1
            }
        },
        load_plan_type_list(){
          let currentObj = this;
          if (this.$cookies.isKey("token")){
              currentObj.axios.get('plan_types/', {
                headers: {
                  'Authorization': currentObj.$cookies.get('token')
                }
              })
              .then(function (response) {
                  currentObj.plan_type_list = response.data.plan_type_list;
                  console.log(currentObj.plan_type_list)
                  currentObj.change_component_key += 1
              })
              .catch(function (error) {
                  currentObj.msg = error;
              });
          }
        },
        get_user_plan_type(){
          let currentObj = this;
          if (this.$cookies.isKey("token")){
              currentObj.axios.post('plan_types/', store.state.profile ,{
                headers: {
                  'Authorization': currentObj.$cookies.get('token'),
                  'Content-Type': 'application/json'
                }
              })
              .then(function (response) {
                  currentObj.user_plan_type = response.data.user_plan_type ;
                  console.log(response.data)
                  console.log(currentObj.user_plan_type)

                  currentObj.change_component_key += 1
              })
              .catch(function (error) {
                  currentObj.msg = error;
              });
          }
        }
    }
};
</script>


<style>


</style>
