<template>
  <div id="questioncard">
    <div class="content-box">
      <div>
        <!-- start quiz -->
        <form @submit.prevent = "submit" id="quiz" v-if="doingquiz">
          <h4 class="text-center card-title">แบบทดสอบระดับความเสี่ยงที่ยอมรับได้</h4>
          <!-- questionTitle -->
          <div v-for="(q, index) in question" :key="q.number" class="quizcontain">
            <h6>ข้อ {{index + 1}}. {{q.ask}}</h6>
            <span class="text-danger" v-if="(!$v.userResponses.$each[index].required && completeStatus.value === false)" >*กรุณาตอบคำถามข้อนี้</span>
            <b-img center fluid :src="q.img" />
            <!-- quizOptions -->
            <b-form-group class="optionContainer">
              <!-- if type == select question -->
              <div v-if="q.type === 0"> 
                <b-form-radio-group v-for="c in q.choice" :key="c.value" :id="'q'+ index">
                  <input type="radio" 
                    :name="'name' + index"
                    :id="'id' + index + c.value" 
                    v-model="userResponses[index]"
                    :value="Number(c.value)" />
                  <label class="option" 
                    :for="'id' + index + c.value" >
                    {{ c.text }}
                  </label>
                  <!-- {{ $v.userResponses.$each[index].$model }} -->
                  <!-- {{ $v.userResponses.$each[index].required }} -->
                </b-form-radio-group>
              </div>
              <!-- if type == checkbox question -->
              <div v-else-if="q.type === 1">
                <b-form-checkbox-group v-for="c in q.choice" :key="c.value" :id="'q'+ index">
                  <input type="checkbox" 
                    :name="'name' + index"
                    :id="'id' + index + c.value" 
                    v-model="userResponses[index]"
                    :value="Number(c.value)" />
                  <label class="option" 
                    :for="'id' + index + c.value" >
                    {{ c.text }}
                  </label>
                </b-form-checkbox-group>
              </div>
            </b-form-group>
          </div>

          <div class="d-flex justify-content-md-center">
            <button @click="clear" type="reset" class="btn btn-outline-primary" id="regularbutton">
                ล้าง
            </button><div class="pr-4"/>
            <button @click="submit" type="submit" class="btn btn-primary" id="regularbutton">
                คำนวณผล
            </button>
          </div>

        </form>
        <!-- end quiz -->
        
        <!-- start modal -->
        <b-modal size="lg" ref="modal-condition" ok-title="ตกลง" title="การทำแบบสอบถามประเมินระดับความเสี่ยง" ok-only centered> 
          <div>
            แบบทดสอบระดับความเสี่ยงที่ยอมรับได้นี้เป็นเพียงการประเมินเบี้องต้นเท่านั้น ระดับความเสี่ยงที่ยอมรับได้จะแตกต่างกันไปตามลักษณะเฉพาะของแต่ละบุคคล
            โดยผู้จัดทำได้อ้างอิงจาก 
            <a href="https://www.kasikornasset.com/DownloadDocument/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%A1%20(Customer%20Risk%20Profile%20).pdf" 
              rel="external nofollow noopener" target="_blank">
              แบบสอบถามประเมินระดับความเสี่ยงในการลงทุนที่เหมาะสม ธนาคารกสิกรไทย
              <!-- แบบทดสอบระดับความเสี่ยงที่ยอมรับได้ (TSI Risk Profile Questionnaire) SET -->
              <!-- https://www.set.or.th/education/th/online_classroom/risk.html -->
            </a>
          </div>
        </b-modal>
        <!-- end modal -->

        <!-- start result -->
        <div id="quizresult" class="quizcontain" v-if="!doingquiz">
          <h4 class="text-center card-title mb-3 mt-1">
            คุณยอมรับความเสี่ยงได้ <span>"{{quizresult[result].text}}"</span>
          </h4>
          <b-img center fluid :src="quizresult[result].img" /><p/>
          <div id="group">
            <h6>คำอธิบาย</h6>
            <p class="mb-5">{{quizresult[result].descrip}}</p>
          </div>

          <div class="d-flex justify-content-md-center">
            <button @click="back" class="btn btn-outline-primary" id="regularbutton">
              กลับ
            </button><div class="pr-4"/>
            <button @click="restart" class="btn btn-primary" id="regularbutton">
              ทำใหม่อีกครั้ง
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import store from "../store/index.js"
export default {
  name: "QuestionTemplate",
  mixins: [validationMixin],
  props: {
    question : Array,
  },
  data() {
    return {
      doingquiz: true,
      userResponses: [
        null, //score1
        null, //score2
        null, //score3
        [],   //score4
        null, //score5
        null, //score6
        null, //score7
        null, //score8
        null, //score9
        null  //score10
      ], 
      result: '0',
      risk_level: '0',
      quizresult: [
        { text: 'ต่ำ', 
          img: require('../assets/question/level_ต่ำ.svg'),
          descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงต่ำ ต้องการผลตอบแทนมากกว่าการฝากเงินธนาคาร ไม่ต้องการความเสี่ยง และมีวัตถุประสงค์การลงทุนในระยะสั้น' },
        { text: 'ปานกลางค่อนข้างต่ำ', 
          img: require('../assets/question/level_ปานกลางค่อนข้างต่ำ.svg'),
          descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงปานกลางค่อนข้างต่ำ ยอมรับความเสี่ยงได้น้อย เน้นปกป้องเงินลงทุน มุ่งหวังรายได้สม่ำเสมอจากการลงทุน' },
        { text: 'ปานกลางค่อนข้างสูง', 
          img: require('../assets/question/level_ปานกลางค่อนข้างสูง.svg'),
          descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงปานกลางค่อนข้างสูง สามารถยอมรับมูลค่าการลงทุนที่ลดลงเป็นครั้งคราวได้ ยอมรับความผันผวนได้ในระดับหนึ่งแต่ต้องไม่มากเกินไป' },
        { text: 'สูง', 
          img: require('../assets/question/level_สูง.svg'),
          descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงสูง ยอมรับความเสี่ยงได้สูง รับความผันผวนของตลาดได้ สามารถยอมรับการขาดทุนได้ โดยมุ่งหวังการเติบโตของเงินลงทุนและผลตอบแทนระยะยาว' },
        { text: 'สูงมาก', 
          img: require('../assets/question/level_สูงมาก.svg'),
          descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงสูงมาก ยอมรับความเสี่ยงได้สูงมาก ต้องการได้รับโอกาสที่จะได้รับผลตอบแทนสูง แม้จะมีความเสี่ยงสูงและยอมรับการขาดทุนได้ในระดับสูงพอสมควร' },
      ],
      completeStatus: {
        value: null,
        descrip: ""
      }
    }
  },
  validations: {
    userResponses: {
      required, // array cannot be left empty
      minLength: minLength(10), // "userResponses" array has to have at least 1 elements
      $each: {
        required,
        minLength: minLength(1), // each field of "userResponses" array has to have at least 1 characters (or be an array of at least 1 elements)
      }
    }, 
  },
  computed: {

  },
  methods: {
    clear() {
      this.userResponses = [null, null, null, [], null, null, null, null, null, null];
      this.risk_level = 0;
      this.result = 0;
      this.completeStatus.value = null
    },
    submit() {
      console.log('submit next!')
      this.$v.userResponses.$touch();
      // console.log(this.userResponses)
      if (this.$v.userResponses.$anyError) {
        console.log("validation error");
        this.completeStatus.value = false
        this.completeStatus.descrip = "กรุณาตอบคำถามให้ครบทุกข้อ"
      }
      else {
        this.completeStatus.value = null
        this.completeStatus.descrip = ""
        this.$refs['modal-condition'].show()
        var score  = 0;
        var result = 0;
        var risk_level = 0;
        for(let i = 0; i < 10 ; i++) {
          if (i != 3 ){
            score = score + Number(this.userResponses[i]);
          }
          else{
            score = score + this.userResponses[i].length
          }
        }
        if (score < 15) {
          risk_level = 1;
          result = 0;
        }
        //15 - 21
        else if (score < 22) {
          risk_level = 4;
          result = 1;
        }
        //22 - 29 
        else if (score < 30) {
          risk_level = 5;
          result = 2;
        }
        //30 - 36
        else if (score < 37) {
          risk_level = 7;
          result = 3;
        }
        else { //37 ++
          risk_level = 8;
          result = 4;
        }
        this.result = result
        this.risk_level = risk_level
        this.doingquiz = false
        this.save_risk()
      }

    },
    back() {
      this.doingquiz = true
    },
    restart() {
      this.clear()
      this.doingquiz = true
    },
    showModal() {
      this.$refs['modal-condition'].show()
    },
    hideModal() {
      this.$refs['modal-condition'].hide()
    }, 
    async save_risk(){
      let new_risk = {
        risk: this.userResponses
      }
      console.log(new_risk)
      let currentObj = this
      if (this.$cookies.get('token')){
        await this.axios
        .post("profile/", new_risk,{
          headers: {
            'Authorization': currentObj.$cookies.get('token'),
            'Content-Type': 'application/json'
          }
        })
        .then(async function(response) {
          console.log("saved risk");
          console.log(response.data)
          store.commit('profile_change', response.data)
          currentObj.$cookies.set('profile',store.state.profile)
        })
        .catch(function(error) {
          console.log(error);
        });
      }
      else{
        console.log('Please login first.')
      }
    },
  },

}
</script>

<style>

</style>