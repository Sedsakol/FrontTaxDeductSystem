<template>
  <div>
    <div id="suggestioncard" :key="change_component_key">
      <div class="text-center" v-if="!is_facebook_login" id="suggestion">
        <h4>แนะนำการลงทุนเพื่อลดหย่อนภาษี</h4>
        <h6>ให้เราช่วยเสนอแนวทางในการลงทุนเพื่อลดหย่อนภาษีที่ใกล้เคียงกับความต้องการ</h6>
        <h6>กรุณา <router-link to="/login" class="text-subblue">เข้าสู่ระบบด้วย facebook</router-link> เพื่อเข้าใช้งานในส่วนการแนะนำการลงทุน</h6>
        <b-img center fluid alt="Responsive image" src="../assets/images/loginfrist.svg"></b-img><p/>
      </div>

      <!-- blue -->
      <div class="content-box bg-mainblue mb-4" v-if="is_facebook_login">
        <!-- <h1>blue</h1> -->
        <b-row>
          <b-col cols = "7" class="text-white">
            <p class="text-center">รูปแบบการลงทุนที่เหมาะสมกับคุณคือ</p>
            <div v-for="ptl in plan_type_list" :key="ptl.id">
              <div v-if="ptl.id==user_plan_type">
                  <h4 class="text-center text-lightyell"> {{ ptl.plan_type_name }} </h4>
                  <p class="text-center">รายละเอียดการกระจายซื้อ</p>
                  <div class="text-white">
                      <b-row v-for=" (d,index) in ptl.plan_data" :key="index" class="ml-1 mr-1">
                        <b-col col lg = "5"> {{index}} </b-col>
                        <b-col cols = "2" md="auto"> {{d}} </b-col>
                        <b-col cols = "1">%</b-col>
                        <b-col cols = "1">≈</b-col>
                        <b-col cols = "2" md="auto" class="text-right"> {{ valueFormatter(d*100000/100) }} </b-col>
                        <b-col col lg = "1">บาท</b-col>
                      </b-row>
                  </div>
              </div>
            </div>
          </b-col>
          <b-col>
              <b-img center fluid :src="require('../assets/plan_type/' + user_plan_type + '.svg')" alt=""/>
          </b-col>
        </b-row>
      </div>

      <!-- white -->
      <div class="content-box mb-4" v-if="is_facebook_login && !submit_done">
        <!-- <h1>white</h1> -->
        <b-row>
          <!-- suggest -->
          <b-col>
              <h6 class="text-center">การลงทุนที่เราแนะนำ</h6><p/>
              <b-img center fluid :src="require('../assets/steptax/step' + suggest_stair + '.svg')" alt=""/><p/>
              <b>การลงทุน</b><p/>
              <b-form-group><b-form-row>
                  <b-col col lg = "6" md="auto"><label class="col-form-label">ลงทุน RMF</label>
                  <b-icon font-scale="0.75" shift-v="1" class="ml-2" id="popover-rmf" icon="exclamation-circle"/>
                  <b-popover target="popover-rmf" triggers="hover" placement= "rightbottom">
                      เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                          <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                          <li>ถือหน่วยลงทุนอย่างน้อย 5 ปี และไม่ขายจนกว่าจะอายุครบ 55 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                      </ul>
                  </b-popover></b-col>
                  <b-col cols = "4" class="text-right"><label class="col-form-label">{{ this.valueFormatter(this.suggest_rmf) }}</label></b-col>
                  <b-col col lg = "2" md = "auto" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <b-form-group><b-form-row>
                  <b-col col lg = "6" md="auto"><label class="col-form-label">ลงทุน SSF</label>
                  <b-icon font-scale="0.75" shift-v="1" class="ml-2" id="popover-ssf" icon="exclamation-circle"/>
                  <b-popover target="popover-ssf" triggers="hover" placement= "rightbottom">
                      เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                          <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                          <li>ถือหน่วยลงทุนอย่างน้อย 10 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                      </ul>
                  </b-popover></b-col>
                  <b-col cols = "4" class="text-right"><label class="col-form-label">{{ this.valueFormatter(suggest_ssf) }}</label></b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <p/><b>ประกันภัย</b><p/>
              <b-form-group><b-form-row>
                  <b-col col lg = "6" md="auto"><label class="col-form-label">เบี้ยประกันชีวิต</label>
                  <b-icon font-scale="0.75" shift-v="1" class="ml-2" id="popover-life_insurance" icon="exclamation-circle"/>
                  <b-popover target="popover-life_insurance" triggers="hover" placement= "rightbottom">
                      เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                          <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                          <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                          <li>รวมทุกกรมธรรม์</li>
                      </ul>
                  </b-popover></b-col>
                  <b-col cols = "4" class="text-right"><label class="col-form-label">{{ this.valueFormatter(suggest_life_insurance) }}</label></b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <b-form-group><b-form-row>
                  <b-col col lg = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label><div>แบบบำนาญ
                  <b-icon font-scale="0.75" shift-v="1" class="ml-2" id="popover-pension_insurance" icon="exclamation-circle"/></div>
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
                  <b-col cols = "4" class="text-right"><label class="col-form-label">{{ this.valueFormatter(suggest_pension_insurance) }}</label></b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <b-form-group><b-form-row class="mt-3">
                <b-col col lg = "6" md="auto">ภาษีที่ต้องจ่าย</b-col>
                <b-col cols = "4" class="text-right text-subblue">{{ this.valueFormatter(this.suggest_tax) }}</b-col>
                <b-col col lg = "2" class="text-right">บาท</b-col>
              </b-form-row></b-form-group>
          </b-col>
          <div class="hrv"></div>
          <!-- yours -->
          <b-col>
              <h6 class="text-center">การลงทุนของฉัน</h6><p/>
              <b-img center fluid :src="require('../assets/steptax/step' + stair + '.svg')" alt=""/>
              <!-- <b-img center fluid alt="Responsive image" src="../assets/steptax/step1.svg"></b-img> -->
              <p/>
              <b>การลงทุน</b><p/>
              <b-form-group><b-form-row>
                  <b-col col lg = "6"><label class="col-form-label">ลงทุน RMF</label></b-col>
                  <b-col cols = "4" class="text-right">
                  <b-form-input type="text" class="form-control text-right" v-model="rmf" @change="data_change_update" :formatter="valueFormatter" />
                  </b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <b-form-group><b-form-row>
                  <b-col col lg = "6"><label class="col-form-label">ลงทุน SSF</label></b-col>
                  <b-col cols = "4" class="text-right">
                  <b-form-input type="text" class="form-control text-right" v-model= "ssf" @change="data_change_update" :formatter="valueFormatter" />
                  </b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <p/><b>ประกันภัย</b><p/>
              <b-form-group><b-form-row>
                  <b-col col lg = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label></b-col>
                  <b-col cols = "4" class="text-right">
                  <b-form-input type="text" class = "text-control text-right" v-model= "life_insurance" @change="data_change_update" :formatter="valueFormatter" />
                  </b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <b-form-group><b-form-row>
                  <b-col col lg = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label><div>แบบบำนาญ</div></b-col>
                  <b-col cols = "4" class="text-right">
                  <b-form-input type="text" class = "text-control text-right" v-model= "pension_insurance" @change="data_change_update" :formatter="valueFormatter" />
                  </b-col>
                  <b-col col lg = "2" class="text-right"><label class="col-form-label">บาท</label></b-col>
              </b-form-row></b-form-group>

              <b-form-group><b-form-row class="mt-3">
                <b-col col lg = "6" md="auto">ภาษีที่ต้องจ่าย</b-col>
                <b-col cols = "4" class="text-right text-subblue">{{ this.valueFormatter(this.tax) }}</b-col>
                <b-col col lg = "2" class="text-right">บาท</b-col>
              </b-form-row></b-form-group>

          </b-col>
        </b-row>

        <b-row class="d-flex justify-content-md-center pt-4">
          <router-link to = "/tax/result" class="pr-4">
            <button type="button" class="btn btn-outline-primary" id="regularbutton">
              ย้อนกลับ
            </button>
          </router-link>  
          <!-- @click="next" -->
          <button v-on:click="submit_done = !submit_done" class="btn btn-primary" id="regularbutton">
            ถัดไป
          </button>
        </b-row>

      </div>

      <!-- funds and insure -->
      <div class="wrap-box" v-if="submit_done">
        <b-row>
          <!-- white left -->
          <b-col class="sub-content-box">
            <div class="sub-content-header">
              <h5>กองทุนที่แนะนำ</h5>
            </div>
            <div class="table">

              <div v-for="(funds, index) in fund_list" :key="index" class="row">
                <div class="col-8" v-on:click="goexternal(funds.link)">
                  <p>{{ funds.name }}</p>
                  <span>{{ funds.description }}</span>
                </div>
                <div class="col-4 text-center">ระดับความเสี่ยง <h4 class="mt-3">{{ funds.risk }}</h4> </div>
              </div>

              <div hidden class="sub-content-footer right">
                <span v-on:click="goexternal(mutual_fund_url)" class="link">ดูกองทุนทั้งหมด <b-icon icon="chevron-right"/></span> 
              </div>
            </div>
          </b-col>

          <!-- white right -->
          <b-col class="sub-content-box">
            <div class="sub-content-header">
              <h5>ประกันที่แนะนำ</h5>
            </div>
            <div class="table">

              <div v-for="(insurance, index) in insurance_list" :key="index" class="row">
                <div class="col-9" v-on:click="goexternal(insurance.link)">
                  <p>{{ insurance.display_name }}</p>
                  <div v-for="(a, aindex) in stringToArrayFormatter(insurance.description)" :key="aindex">
                    <span><b-icon icon="dot" />{{ a }}</span>
                  </div>
                </div>
              </div>

              <div hidden class="sub-content-footer right">
                <span v-on:click="goexternal(insure_url)" class="link">ดูประกันทั้งหมด <b-icon icon="chevron-right"/></span> 
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="d-flex justify-content-md-center pt-4">
          <button v-on:click="submit_done = !submit_done" class="btn btn-outline-primary" id="regularbutton">
            ย้อนกลับ
          </button>
          <router-link to = "/tax/calculate" class="pl-4">
            <button class="btn btn-primary" id="regularbutton">
                เสร็จสิ้น
            </button>
          </router-link> 
        </b-row>
      </div>
    </div>

    <b-modal ref="modal-do-quiz" :hide-header=true ok-only centered> 
      <p class="my-4 text-center">กรุณาทำแบบทดสอบความเสี่ยงก่อน เพื่อการแนะนำการลงทุนที่ดีขึ้น</p>
      <template #modal-footer>
        <button @click="go_quiz()" class="btn btn-primary" id="regularbutton">
          ไปทำแบบทดสอบ
        </button>
      </template>
    </b-modal>

    <b-overlay id="overlay" :show="showoverlay" spinner-type="grow" no-wrap/>

  </div>
</template>

<script>
import store from "../store/index.js"
export default {
    name: "SuggestionCard",
    props: {
      // fund_list : Array,
      // insurance_list : Array,
    },
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
        total_income: store.state.tax.salary*12 + store.state.tax.other_income,

        allowance_60k: 60000,
        allowance_100k: store.state.result_tax.personal_allowance,
        other_allowance: store.state.result_tax.allowance, 
        net_income: store.state.result_tax.net_income,
        tax: store.state.result_tax.tax,
        stair: store.state.result_tax.stair,

        suggest_stair: 2,
        suggest_rmf : 0,
        suggest_ssf : 0,
        suggest_life_insurance: 0,
        suggest_pension_insurance: 0,
        suggest_tax : 1000,

        plan_type: 'แบบป้องกันความเสี่ยง',
        user_plan_type : 1,
        plan_type_list : '',
        fund_list : '',
        insurance_list : '',

        change_component_key : 1,
        is_facebook_login : false,
        do_quiz : false,
        submit_done : false,
        showoverlay : false,

        mutual_fund_url : 'https://www.kasikornasset.com/th/mutual-fund/pages/index.aspx',
        insure_url : 'https://kasikornbank.com/th/healthcareprotect'
      }
    },
    mounted(){
      this.load_result_tax_from_cookie()
      this.load_new_allowance_from_cookie()
      this.load_new_tax_from_cookie()
      this.check_user_login()
      this.check_do_quiz()
    },
    methods : {
      data_change_update(){
        let b = {
          rmf: this.valueFormatter2(this.rmf),
          ssf: this.valueFormatter2(this.ssf),
          life_insurance: this.valueFormatter2(this.life_insurance),
          pension_insurance: this.valueFormatter2(this.pension_insurance)
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

              rmf: this.valueFormatter2(this.rmf),
              ssf: this.valueFormatter2(this.ssf),
              life_insurance: this.valueFormatter2(this.life_insurance),
              pension_insurance: this.valueFormatter2(this.pension_insurance),

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
              currentObj.tax = response.data.tax;
              currentObj.stair = response.data.stair
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

              this.rmf = this.valueFormatter(store.state.allowance.rmf)
              this.ssf = this.valueFormatter(store.state.allowance.ssf)
              this.life_insurance = this.valueFormatter(store.state.allowance.life_insurance)
              this.pension_insurance = this.valueFormatter(store.state.allowance.pension_insurance)
              
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
                currentObj.fund_list = response.data.fund_list;
                currentObj.insurance_list = response.data.insurance_list;
                // currentObj.dum = currentObj.insurance_list.description;
                // currentObj.dum = currentObj.dum.replace(/'/g, '"');
                // currentObj.dum = JSON.parse(currentObj.dum);

                let curr_plan = currentObj.plan_type_list.filter(plan => plan.id == currentObj.user_plan_type)[0]
                for(var key in curr_plan.plan_data){
                  console.log(curr_plan.plan_data[key])
                  let money_value = curr_plan.plan_data[key] * currentObj.total_income / 100
                  if (key == "ลงทุน RMF"){
                    currentObj.suggest_rmf = money_value
                  }
                  if (key == "ลงทุน SSF"){
                      currentObj.suggest_ssf = money_value
                  }
                  if (key =="ประกันชีวิต"){
                      currentObj.suggest_life_insurance = money_value
                  }
                  if (key == "ประกันชีวิตแบบบำนาญ"){
                      currentObj.suggest_pension_insurance= money_value
                  }
                }

                let a = {
                  salary: store.state.tax.salary,
                  other_income: store.state.tax.other_income,
                  marital: store.state.tax.marital,
                  parent_num_dis: store.state.tax.parent_num_dis,
                  child_before_2561: store.state.tax.child_before_2561,
                  child_after_2561: store.state.tax.child_after_2561,
                  protege: store.state.tax.protege,

                  rmf: currentObj.suggest_rmf,
                  ssf: currentObj.suggest_ssf,
                  life_insurance: currentObj.suggest_life_insurance,
                  pension_insurance: currentObj.suggest_pension_insurance,

                  donation: store.state.allowance.donation,
                  edu_donation: store.state.allowance.edu_donation,
                  home_loans: store.state.allowance.home_loans,
                  provident_fund: store.state.allowance.provident_fund,
                  social_security: store.state.allowance.social_security,
                  other: store.state.allowance.other
              }

              currentObj.axios.post('tax/', a)
              .then(async function (r) {
                  currentObj.suggest_stair = r.data.stair
                  currentObj.suggest_tax = r.data.tax
                  currentObj.change_component_key += 1
                  currentObj.showoverlay = false; // remove overlay
              })
          
            })
            .catch(function (error) {
                currentObj.msg = error;
                currentObj.showoverlay = false; // remove overlay
            });
        }
      },
      async check_user_login(){
        if (this.$cookies.isKey("token")){
            if (store.state.profile.facebook_id){
              this.is_facebook_login = true;
              this.showoverlay = true; // show overlay
              await this.load_plan_type_list()
              await this.get_user_plan_type()
            }
            else{
              this.is_facebook_login = false;
            }
        }
        else{
          this.showoverlay = false
        }
      },
      async check_do_quiz(){
        let currentObj = this;
        
        if (currentObj.$cookies.isKey("token")){

            if (!store.state.profile.risk){ //no risk score
              currentObj.do_quiz = false;
              currentObj.show()
            }
            else{
              currentObj.do_quiz = true;
            }
        }
        currentObj.change_component_key += 1
      },
      go_quiz(){
        this.$router.push("/question");
        this.$router.go();
      },
      valueFormatter(value) {
        // any character that's not a digit
        var fixedValue = String(value).split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
        // var formatValue = Number(fixedValue).toLocaleString();
        return fixedValue;
      },
      valueFormatter2(value) { 
        var fixedValue = String(value).replace(/[^0-9]/g, ""); 
        var formatValue = Number(fixedValue)
        return formatValue;
      },
      stringToArrayFormatter(value) {
        // any character that's not a digit
        var string = String(value).replace(/'/g, '"');
        string = JSON.parse(string);
        return string;
      },
      goexternal(value) {
        // console.log(value)
        window.open(value)
      },
      show() {
        this.$refs['modal-do-quiz'].show()
      },
      hide() {
        this.$refs['modal-do-quiz'].hide()
      }
    }
};
</script>


<style>


</style>
